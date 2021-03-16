/* eslint-disable import/no-cycle */
import axios from "axios";
import { isDefined } from "../utils/functions";
import { baseUrl, apikey } from "../utils/constants";
const replace = require("key-value-replace");

/**
 * Handles what every request should return to the app, a success boolean and a value, based on the response from the server.
 */

const handleReturn = (resp, defaultValueError) => {
  const objToReturn = {
    isSuccess: false,
    result: defaultValueError,
  };

  const { status, data, response } = resp;

  switch (status) {
    case 200: {
      objToReturn.isSuccess = true;
      objToReturn.result = data.data;
      break;
    }
    case 302: {
      window.location.href = data.data;
      break;
    }
    case 400: {
      const errorList = [];

      if (Array.isArray(response.data.data)) {
        response.data.data.forEach(element => {
          const error = { field: element.field, errorId: element.tag };
          errorList.push(error);
        });
      } else {
        const error = { errorId: response.data.data };
        errorList.push(error);
      }

      objToReturn.result = errorList;
      break;
    }
    case 404: {
      objToReturn.isSuccess = false;
      break;
    }
    default: {
      break;
    }
  }

  return objToReturn;
};

/**
 * Replaces strings defined on the endpoint (ex: '/:id') with the values in the 'urlParams'.
 */

const constructEndpoint = (endpoint, urlParams) =>
  isDefined(urlParams) ? replace(endpoint, urlParams, [":", ":"]) : endpoint;

const generateUrl = (endpoint, urlParams) => {
  const finalEndpoint = constructEndpoint(endpoint, urlParams);
  return `${baseUrl}${finalEndpoint}`;
};

const httpService = async (
  method,
  endpoint,
  {
    data,
    headers = {},
    urlParams,
    queryParams,
    defaultValueError = "",
    successAlertMsg,
    showAlertIfError = false,
  },
) => {
  const url = generateUrl(endpoint, urlParams);
  let resp = null;
  let showErrorAlert = showAlertIfError;
  const params = { ...queryParams, apikey };

  switch (method) {
    case "delete": {
      resp = await axios.delete(url, { headers, params }).catch(error => error.response);
      showErrorAlert = true;
      break;
    }
    case "get": {
      resp = await axios.get(url, { headers, params }).catch(error => error.response);
      break;
    }
    case "post": {
      resp = await axios.post(url, data, { headers }).catch(error => error.response);
      showErrorAlert = true;
      break;
    }
    case "put": {
      resp = await axios.put(url, data, { headers }).catch(error => error.response);
      showErrorAlert = true;
      break;
    }
    default:
  }

  return handleReturn(resp, defaultValueError, successAlertMsg, showErrorAlert);
};

export default httpService;

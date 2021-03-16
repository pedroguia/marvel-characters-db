import httpService from "../services/http-service";
import endpoints from "./endpoints";


const marvelRequests = {
  getCharacters: async filters => {
    const { GET_CHARACTERS } = endpoints.MARVEL;

    const response = await httpService("get", GET_CHARACTERS, {
      queryParams: {
        nameStartsWith: filters.name || undefined,
        offset: (filters.page - 1) * filters.itemsPerPage || undefined,
        limit: filters.itemsPerPage || undefined,
        orderBy: filters.orderBy === "desc" ? "-name" : "name" || undefined,
      },
    });

    return response;
  },
  getCharacterById: async id => {
    const { GET_CHARACTER_BY_ID } = endpoints.MARVEL;

    const response = await httpService("get", GET_CHARACTER_BY_ID, {
      urlParams: { id },
    });

    return response;
  },
};

export default marvelRequests;

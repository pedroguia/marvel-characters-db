export const isDefined = v => v !== undefined && v !== null;

export const addUrlParam = (param, value) => {
  const url = new URL(window.location.href);
  url.searchParams.set(param, value);
  window.history.pushState({ path: url.href }, "", url.href);
};

export const getUrlParam = param => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  return urlParams.get(param);
};

export const removeUrlParam = param => {
  const url = new URL(window.location.href);
  url.searchParams.delete(param);
  window.history.pushState({ path: url.href }, "", url.href);
};

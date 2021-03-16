export const routes = {
  LIST: "/characters",
  DETAIL: "/characters/:id",
  COMICS: "/characters/:id/comics",
  EVENTS: "/characters/:id/events",
  SERIES: "/characters/:id/series",
  STORIES: "/characters/:id/stories",
};

export const baseUrl = "https://gateway.marvel.com/v1/public";

export const apikey = process.env.REACT_APP_PUBLIC_API_KEY;

export const sortOptions = ["asc", "desc"];

export const perPageOptions = [20, 40, 80];

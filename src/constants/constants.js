//nroutes
export const HOME_PAGE_ROUTE = "/";
export const PEOPLE_PAGE_ROUTE = "/people";
export const SEARCH_PAGE_ROUTE = "/search";
export const NOT_FOUND_PAGE_ROUTE = "/not-found";
export const FAIL_PAGE_ROUTE = "/fail";
export const FAVOURITE_PAGE_ROUTE = "/favourite";
export const PEOPLE_ITEM_PAGE_ROUTE =`${PEOPLE_PAGE_ROUTE }/:id`;
//common
export const HTTP = "http://";
export const HTTPS = "https://";

// swapi
export const SWAPI_ROOT = "swapi.dev/api/";
export const SWAPI_PEOPLE = "people";

// visualguide
const GUIDE_ROOT_IMG = "https://starwars-visualguide.com/assets/img/";
const GUIDE_PEOPLE = "characters";
export const GUIDE_IMG_EXTENSION = ".jpg";

export const URL_IMG_PERSON = GUIDE_ROOT_IMG + GUIDE_PEOPLE;

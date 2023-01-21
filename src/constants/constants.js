//nroutes
export const HOME_PAGE_ROUTE = "/";
export const PEOPLE_PAGE_ROUTE = "/people";
export const SEARCH_PAGE_ROUTE = "/search";
export const NOT_FOUND_PAGE_ROUTE = "/not-found";
export const NOT_FOUND_ROUTE = "/*";
export const FAIL_PAGE_ROUTE = "/fail";
export const FAVOURITE_PAGE_ROUTE = "/favourite";
export const PERSON_PAGE_ROUTE = `/people/:id`;
//common
export const HTTP = "http://";
export const HTTPS = "https://";

// swapi
export const SWAPI_ROOT = "swapi.dev/api/";
export const SWAPI_PEOPLE = "people";
export const SWAPI_PARAM_PAGE = "/?page=";

export const API_PEOPLE = HTTPS + SWAPI_ROOT + SWAPI_PEOPLE + SWAPI_PARAM_PAGE;
export const API_PERSON = HTTPS + SWAPI_ROOT + SWAPI_PEOPLE;

// visualguide
const GUIDE_ROOT_IMG = "https://starwars-visualguide.com/assets/img/";
const GUIDE_PEOPLE = "characters";
export const GUIDE_IMG_EXTENSION = ".jpg";

export const URL_IMG_PERSON = GUIDE_ROOT_IMG + GUIDE_PEOPLE;

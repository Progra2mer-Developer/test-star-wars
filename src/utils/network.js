import { SWAPI_PEOPLE, SWAPI_ROOT } from "../constants";

export const getApiResource = async (url) => {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.error("Could not fetch.", res.status);
      return false;
    }
    const body = await res.json();
    return body;
  } catch (error) {
    console.log("Could not fetch.", error.message);
    return false;
  }
};

// (async () => {
//   const body = await getApiResource(SWAPI_ROOT + SWAPI_PEOPLE);
//   console.log(body);
// })();

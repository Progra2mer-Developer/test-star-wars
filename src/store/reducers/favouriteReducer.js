import { omit } from "lodash";
import { getLocalStorage } from "@utils/localstorage";
import { LOCALSTORAGE_KEY } from "@constants/constants";

import {
  ADD_PERSON_TO_FAVOURITE,
  REMOVE_PERSON_FROM_FAVOURITE,
} from "@store/constants/actionTypes";

const initialState = getLocalStorage(LOCALSTORAGE_KEY);
const favouriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PERSON_TO_FAVOURITE:
      return { ...state, ...action.payload };
    case REMOVE_PERSON_FROM_FAVOURITE:
      return omit(state, [action.payload]);

    default:
      return state;
  }
};
export default favouriteReducer;

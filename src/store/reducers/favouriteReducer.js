import { omit } from "lodash";

import {
  ADD_PERSON_TO_FAVOURITE,
  REMOVE_PERSON_FROM_FAVOURITE,
} from "@store/constants/actionTypes";

const initialState = {};
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

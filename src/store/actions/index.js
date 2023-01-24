import {
  ADD_PERSON_TO_FAVOURITE,
  REMOVE_PERSON_FROM_FAVOURITE,
} from "@store/constants/actionTypes";

export const setPersonToFavourite = (person) => ({
  type: ADD_PERSON_TO_FAVOURITE,
  payload: person,
});
export const removePersonFromFavourite = (personId) => ({
  type: REMOVE_PERSON_FROM_FAVOURITE,
  payload: personId,
});

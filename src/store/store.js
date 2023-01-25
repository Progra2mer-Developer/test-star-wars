import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rooteReducer from "./reducers";
import { setLocalStorage } from "@utils/localstorage";
import {LOCALSTORAGE_KEY} from "@constants/constants";

const store = createStore(rooteReducer, composeWithDevTools(applyMiddleware()));
store.subscribe(() => {
  setLocalStorage(LOCALSTORAGE_KEY, store.getState().favouriteReducer);
});
export default store;

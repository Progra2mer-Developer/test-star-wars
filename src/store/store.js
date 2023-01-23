import { createStore } from "redux";
import rooteReducer from "./reducers";

const store = createStore(rooteReducer);
export default store;

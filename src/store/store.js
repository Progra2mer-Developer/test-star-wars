import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rooteReducer from "./reducers";

const store = createStore(rooteReducer, composeWithDevTools(applyMiddleware()));
export default store;

import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
import store from "./store/store";

import App from "./App/App";

import { BrowserRouter } from "react-router-dom";

import reportWebVitals from "./reportWebVitals";

import "@styles/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();

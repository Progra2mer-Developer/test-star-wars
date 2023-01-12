import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../components/Header/Header";
import { SWAPI_PEOPLE, SWAPI_ROOT } from "../constants";
import { navRoutes, publicRoutes } from "../routesConfig";
import { getApiResource } from "../utils/network";

import s from "./App.module.css";

const App = () => {
 
  return (
    <div className={s.app}>
      <Header />
      <Routes>
        {navRoutes.map((route) => {
          return (
            <Route path={route.path} element={route.element} key={route.name} />
          );
        })}
        {publicRoutes.map((route) => {
          return (
            <Route path={route.path} element={route.element} key={route.name} />
          );
        })}
      </Routes>
    </div>
  );
};

export default App;

import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "@components/Header/Header";
import { SWAPI_PEOPLE, SWAPI_ROOT } from "@constants/constants";
import { navRoutes, publicRoutes } from "@routes/routesConfig";
import { getApiResource } from "@utils/network";

import s from "./App.module.css";

const App = () => {
  return (
    <div className={s.app}>
      <Header />
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Routes>
          {navRoutes.map((route) => {
            return (
              <Route
                path={route.path}
                element={route.element}
                key={route.name}
              />
            );
          })}
          {publicRoutes.map((route) => {
            return (
              <Route
                path={route.path}
                element={route.element}
                key={route.name}
              />
            );
          })}
        </Routes>
      </div>
    </div>
  );
};

export default App;

import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "@components/Header/Header";
import { navRoutes, publicRoutes } from "@routes/routesConfig";

import s from "./App.module.css";
import { hidenRoutes } from "../routes/routesConfig";

const App = () => {
  return (
    <div className={s.app}>
      <div className={s.wrapper}>
        <Header />

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
          {hidenRoutes.map((route) => {
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

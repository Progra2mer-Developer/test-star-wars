import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../components/Header/Header";
import { navRoutes, publicRoutes } from "../routesConfig";

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

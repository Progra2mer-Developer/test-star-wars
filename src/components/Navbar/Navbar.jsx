import React from "react";
import { NavLink } from "react-router-dom";
import { navRoutes } from "../../routesConfig";

import s from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={s.navbar}>
      {navRoutes.map((route) => {
        return (
          <NavLink to={route.path} key={route.name}>
            {route.name}
          </NavLink>
        );
      })}
    </div>
  );
};

export default Navbar;

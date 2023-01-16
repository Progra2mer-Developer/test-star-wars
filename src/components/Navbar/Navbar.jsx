import React from "react";
import { NavLink } from "react-router-dom";
import { navRoutes } from "@routes/routesConfig";

import s from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={s.navbar}>
      {navRoutes.map((route) => {
        return (
          <NavLink
            to={route.path}
            key={route.name}
            className={(props) => `${s.link} ${props.isActive ? s.active : ""}`}
          >
            {route.name}
          </NavLink>
        );
      })}
    </div>
  );
};

export default Navbar;

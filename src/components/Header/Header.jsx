import React from "react";
import { NavLink } from "react-router-dom";
import { publicRoutes } from "@routes/routesConfig";

import Navbar from "@components/Navbar/Navbar";
import Logo from "@components/Logo/Logo";

import s from "./Header.module.css";

const Header = () => {
  return (
    <div className={s.header}>
      <div className={s.nav}>
        <Logo />
        <Navbar />
      </div>

      <div className={s.favourite}>
        {publicRoutes.map((route) => {
          return (
            <NavLink to={route.path} key={route.name} className={s.link}>
              {route.name}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default Header;

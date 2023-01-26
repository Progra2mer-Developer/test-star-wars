import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { publicRoutes } from "@routes/routesConfig";

import Favourite from "../Favourite/Favourite";
import Navbar from "@components/Navbar/Navbar";
import Logo from "@components/Logo/Logo";

import { THEME_LIGHT, THEME_DARK, THEME_NEITRAL } from "@constants/constants";
import { useTheme } from "@context/ThemeProvider";

import imgDroid from "./img/droid.svg";
import imgLightsaber from "./img/lightsaber.svg";
import imgSpaceStation from "./img/space-station.svg";

import s from "./Header.module.css";

const Header = () => {
  const [icon, setIcon] = useState(imgSpaceStation);
  const isTheme = useTheme();
  useEffect(() => {
    switch (isTheme.theme) {
      case THEME_LIGHT:
        setIcon(imgLightsaber);
        break;
      case THEME_DARK:
        setIcon(imgDroid);
        break;
      case THEME_NEITRAL:
        setIcon(imgSpaceStation);
        break;
      default:
        setIcon(imgSpaceStation);
        break;
    }
  }, [isTheme]);

  return (
    <div className={s.header}>
      <div className={s.nav}>
        <Logo icon={icon} />
        <Navbar />
      </div>

      <div className={s.favourite}>
        {publicRoutes.map((route) => {
          return (
            <NavLink to={route.path} key={route.name} className={s.link}>
              <Favourite />
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default Header;

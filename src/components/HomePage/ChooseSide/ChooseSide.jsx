import React, { useContext } from "react";

import { useTheme } from "@context/ThemeProvider";
import { THEME_LIGHT, THEME_DARK, THEME_NEITRAL } from "@constants/constants";

import imgLightSide from "./img/light-side.jpg";
import imgDarkSide from "./img/dark-side.jpg";
import imgFalcon from "./img/falcon.jpg";

import PropTypes from "prop-types";

import s from "./ChooseSide.module.css";

const ChooseSide = () => {
  const isTheme = useTheme();
  console.log(isTheme);
  return (
    <div className={s.chooseSide}>
      {isTheme.theme}
      <img
        src={imgLightSide}
        onClick={() => isTheme.change(THEME_LIGHT)}
        alt="light"
      />
      <img
        onClick={() => isTheme.change(THEME_DARK)}
        src={imgDarkSide}
        alt="dark"
      />
      <img
        onClick={() => isTheme.change(THEME_NEITRAL)}
        src={imgFalcon}
        alt="neitral"
      />
    </div>
  );
};

ChooseSide.propTypes = {
  //   useTheme: PropTypes.func,
  //   THEME_LIGHT: PropTypes.string,
  //   THEME_DARK: PropTypes.string,
  //   THEME_NEITRAL: PropTypes.string,
};

export default ChooseSide;

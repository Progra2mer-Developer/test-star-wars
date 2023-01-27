import React, { useContext } from "react";

import { useTheme } from "@context/ThemeProvider";

import { changeCssVariables } from "@services/changeCssVariables";

import { THEME_LIGHT, THEME_DARK, THEME_NEITRAL } from "@constants/constants";

import imgLightSide from "./img/light-side.jpg";
import imgDarkSide from "./img/dark-side.jpg";
import imgFalcon from "./img/falcon.jpg";

import PropTypes from "prop-types";
import cn from "classnames";
import s from "./ChooseSide.module.css";

const ChooseSideItem = ({ classes, theme, text, img }) => {
  const isTheme = useTheme();

  return (
    <div
      className={cn(s.item, classes)}
      onClick={() => {
        isTheme.change(theme);
        changeCssVariables(theme);
      }}
    >
      <div className={s.item__header}>{text}</div>
      <img src={img} alt={text} className={classes} />
    </div>
  );
};

ChooseSideItem.propTypes = {
  classes: PropTypes.string,
  theme: PropTypes.string,
  text: PropTypes.string,
  img: PropTypes.string,
}


const ChooseSide = () => {
  const elements = [
    {
      theme: THEME_LIGHT,
      text: "Light Side",
      img: imgLightSide,
      classes: s.item__light,
    },
    {
      theme: THEME_DARK,
      text: "Dark Side",
      img: imgDarkSide,
      classes: s.item__dark,
    },
    {
      theme: THEME_NEITRAL,
      text: "I'm Han Solo",
      img: imgFalcon,
      classes: s.item__neitral,
    },
  ];
  return (
    <div className={s.chooseSide}>
      {elements.map(({ theme, text, img, classes }, index) => (
        <ChooseSideItem
          key={index}
          theme={theme}
          text={text}
          img={img}
          classes={classes}
        />
      ))}
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

import React from "react";

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
      <div className={s.header}>{text}</div>
      <img src={img} alt={text} className={s.img} />
    </div>
  );
};

ChooseSideItem.propTypes = {
  classes: PropTypes.string,
  theme: PropTypes.string,
  text: PropTypes.string,
  img: PropTypes.string,
};

const ChooseSide = () => {
  const elements = [
    {
      theme: THEME_LIGHT,
      text: "Light Side",
      img: imgLightSide,
      classes: s.light,
    },
    {
      theme: THEME_DARK,
      text: "Dark Side",
      img: imgDarkSide,
      classes: s.dark,
    },
    {
      theme: THEME_NEITRAL,
      text: "I'm Han Solo",
      img: imgFalcon,
      classes: s.neitral,
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

export default ChooseSide;

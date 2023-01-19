import React from "react";

import PropTypes from "prop-types";

import cn from "classnames";
import "../index.css";
import s from "./UiButton.module.css";

const UiButton = ({ text, disabled, onClick, theme = "dark", classes }) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={cn(s.btn, s[theme], classes)}
    >
      {text}
    </button>
  );
};

UiButton.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  text: PropTypes.string,
  theme: PropTypes.string,

  classes: PropTypes.string,
};

export default UiButton;

import React from "react";

import PropTypes from "prop-types";

import icon from "./img/cancel.svg";

import cn from "classnames";
import "../index.css";
import s from "./UiInput.module.css";

const UiInput = ({
  inputSearchValue,
  placeholder,
  handleInputChange,
  classes,
}) => {
  return (
    <div className={cn(s.uiInput, classes)}>
      <input
        value={inputSearchValue}
        onChange={(e) => handleInputChange(e.target.value)}
        placeholder={placeholder}
        type="text"
        className={s.input}
      />
      <img
        src={icon}
        onClick={()=>inputSearchValue && handleInputChange("")}
        alt="remove"
        className={cn(s.clear, !inputSearchValue && s.desabled)}
      />
    </div>
  );
};

UiInput.propTypes = {
  inputSearchValue: PropTypes.string,
  placeholder: PropTypes.string,
  handleInputChange: PropTypes.func,
  classes: PropTypes.string,
};

export default UiInput;

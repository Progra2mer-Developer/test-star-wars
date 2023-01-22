import React from "react";

import PropTypes from "prop-types";

import s from "./UiLoading.module.css";

const UiLoading = ({ theme = "white" }) => {
  return (
    <div className={s.uiLoading}>
      <div
        style={{
          borderColor: theme,
          filter: `drop-shadow(0 0 2px ${theme}`,
        }}
        className={s.loader}
      ></div>
    </div>
  );
};

UiLoading.propTypes = {
  theme: PropTypes.string,
};

export default UiLoading;

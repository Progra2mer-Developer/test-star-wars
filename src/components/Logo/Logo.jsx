import React from "react";

import PropTypes from "prop-types";

import s from "./Logo.module.css";

const Logo = ({ icon }) => {
  return (
    <div className={s.logo}>
      <img src={icon} alt="logo" />
    </div>
  );
};

Logo.propTypes = {
  icon: PropTypes.string,
};

export default Logo;

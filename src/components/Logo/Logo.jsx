import React from "react";

import logo from "./img/logo.svg";

import s from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={s.logo}>
      <img src={logo} alt="logo" />
    </div>
  );
};

export default Logo;

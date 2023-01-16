import React from "react";

import s from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={s.homePage}>
      <h2 className={`header__text ${s.header}`}>Choose your side</h2>
      <div>HomePage</div>
    </div>
  );
};

export default HomePage;

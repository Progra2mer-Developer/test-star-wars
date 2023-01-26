import React from "react";
import ChooseSide from "@components/HomePage/ChooseSide/ChooseSide";

import s from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={s.homePage}>
      <h2 className={`header__text ${s.header}`}>Choose your side</h2>
      <ChooseSide />
    </div>
  );
};

export default HomePage;

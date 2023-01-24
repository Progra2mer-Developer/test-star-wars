import React from "react";

import bm from "./img/bookmark.svg";
import s from "./Favourite.module.css";

const Favourite = () => {
  return (
    <div className={s.favourite}>
      <span className={s.counter}>0</span>
      <img src={bm} alt="icon" className={s.icon} />
    </div>
  );
};

export default Favourite;

import React from "react";

import { useSelector } from "react-redux";

import s from "./FavouritePage.module.css";

const FavouritePage = () => {
  const storeDate = useSelector((state) => state.favouriteReducer);
  console.log(storeDate);
  return (
    <div className={s.favouritePage}>
      <div>FavouritePage</div>
    </div>
  );
};

export default FavouritePage;

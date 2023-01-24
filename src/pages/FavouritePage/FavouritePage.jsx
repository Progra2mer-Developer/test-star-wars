import React from "react";

import { useSelector } from "react-redux";

import s from "./FavouritePage.module.css";

const FavouritePage = () => {
  // const storeDate = useSelector((state) => state.favouriteReducer);
  // console.log(storeDate);
  return (
    <div className={s.favouritePage}>
      {/* {storeDate.map((storeItme) => {
        return (
          <div>
            <img src={storeItme.img} alt="img" />
            <div>{storeItme.name}</div>
          </div>
        );
      })} */}
      12
    </div>
  );
};

export default FavouritePage;

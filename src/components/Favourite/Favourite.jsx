import React from "react";

import bm from "./img/bookmark.svg";
import s from "./Favourite.module.css";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";

const Favourite = () => {
  const [count, setCount] = useState(0);
  const storeDate = useSelector((state) => state.favouriteReducer);
  useEffect(() => {
    const personsCount = Object.keys(storeDate).length;
    personsCount.toString().length > 2
      ? setCount("...")
      : setCount(personsCount);
  }, [storeDate]);
  return (
    <div className={s.favourite}>
      <span className={s.counter}>{count}</span>
      <img src={bm} alt="icon" className={s.icon} />
    </div>
  );
};

export default Favourite;

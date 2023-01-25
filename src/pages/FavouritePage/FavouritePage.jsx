import React, { useState } from "react";
import PeopleList from "../../components/PeoplePage/PeoleList/PeoleList";

import { useSelector } from "react-redux";

import s from "./FavouritePage.module.css";
import { useEffect } from "react";

const FavouritePage = () => {
  const [people, setPeople] = useState([]);
  const storeDate = useSelector((state) => state.favouriteReducer);

  useEffect(() => {
    const arr = Object.entries(storeDate);
    if (arr.length) {
      const res = arr.map((item) => {
        return { id: item[0], name: item[1].name, img: item[1].img };
      });
      setPeople([...res]);
    }
  }, []);
  return (
    <div className={s.favouritePage}>
      {people.length ? (
        <PeopleList people={people} />
      ) : (
        <h2 className={s.comment}>No data</h2>
      )}
    </div>
  );
};

export default FavouritePage;

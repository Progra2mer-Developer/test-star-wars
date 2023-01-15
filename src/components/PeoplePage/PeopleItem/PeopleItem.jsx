import React from "react";

import s from "./PeopleItem.module.css";

const PeopleItem = ({ img, name, id }) => {
  return (
    <div className={s.peopleItem}>
      <a href="#">
        <img src={img} alt={name} className={s.photo} />
        <div className={s.text}>{name}</div>
      </a>
    </div>
  );
};

export default PeopleItem;

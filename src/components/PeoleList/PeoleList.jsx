import React from "react";

import s from "./PeoleList.module.css";

const PeoleList = ({ people }) => {
  return (
    <div className={s.peopelList}>
      {people.map(({ name, img, id }) => {
        return (
          <div key={id} className={s.item}>
            <a href="#">
              <img src={img} alt={name} className={s.photo} />
              <div style={{ color: "white" }}>{name}</div>
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default PeoleList;

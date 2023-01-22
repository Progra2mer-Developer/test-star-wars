import React from "react";

import PropTypes from "prop-types";

import s from "./PersonInfo.module.css";

const PersonInfo = ({ person }) => {
  return (
    <div className={s.personInfo}>
      {person.map((item) => {
        return (
          item.data && (
            <div style={{ color: "white" }} key={item.title} className={s.item}>
              <span className={s.title}>{item.title}</span>:
              <span className={s.data}>{item.data}</span>
            </div>
          )
        );
      })}
    </div>
  );
};

PersonInfo.propTypes = {
  person: PropTypes.array,
};

export default PersonInfo;

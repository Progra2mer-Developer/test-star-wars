import React from "react";

import PropTypes from "prop-types";

import s from "./PersonInfo.module.css";

const PersonInfo = ({ person, personFilms }) => {
  return (
    <div className={s.personInfo}>
      <div className={s.list}>
        {person.map((item) => {
          return (
            item.data && (
              <div
                style={{ color: "white" }}
                key={item.title}
                className={s.item}
              >
                <span className={s.title}>{item.title}</span>:
                <span>{item.data}</span>
              </div>
            )
          );
        })}
      </div>
      {/* <div>
        {personFilms ? (
          <div>
            {personFilms.map((film, id) => {
              return (
                <div style={{ color: "white" }} key={id}>
                  {film}
                </div>
              );
            })}
          </div>
        ) : null}
      </div> */}
    </div>
  );
};

PersonInfo.propTypes = {
  person: PropTypes.array,
  personFilms: PropTypes.array,
};

export default PersonInfo;

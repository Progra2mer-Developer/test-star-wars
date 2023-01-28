import React from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";

import s from "./SearchPageInfo.module.css";

const SearchPageInfo = ({ people }) => {
  return (
    <div className={s.searchPageInfo}>
      {people.length ? (
        <>
          {people.map(({ name, id, img }) => (
            <Link to={`/people/${id}`} key={id}>
              <img src={img} alt={name} className={s.photo} />
              <div className={s.text}>{name}</div>
            </Link>
          ))}
        </>
      ) : (
        <h2>No results</h2>
      )}
    </div>
  );
};

SearchPageInfo.propTypes = {
  people: PropTypes.array,
};

export default SearchPageInfo;

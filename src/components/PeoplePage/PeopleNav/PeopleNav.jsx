import React from "react";

import PropTypes from "prop-types";

import s from "./PeopleNav.module.css";
import { Link } from "react-router-dom";
import { SWAPI_PARAM_PAGE, SWAPI_PEOPLE } from "../../../constants/constants";

const PeopleNav = ({ getResource, prevPage, nextPage, page }) => {
  return (
    <div className={s.peopleNav}>
      <button
        onClick={() => getResource(prevPage)}
        className={`${s.btn} ${s.next}`}
      >
        Next
      </button>
      <button
        onClick={() => getResource(nextPage)}
        className={`${s.btn} ${s.prev}`}
      >
        Prev
      </button>
    </div>
  );
};

PeopleNav.propTypes = {
  getResource: PropTypes.func,
  prevPage: PropTypes.string,
  nextPage: PropTypes.string,
  page: PropTypes.number,
};

export default PeopleNav;

import React from "react";

import PropTypes from "prop-types";

import UiButton from "@ui/UiButton/UiButton";

import s from "./PeopleNav.module.css";

const PeopleNav = ({ getResource, prevPage, nextPage, page }) => {
  return (
    <div className={s.peopleNav}>
      <UiButton
        text="Next"
        disabled={!prevPage}
        onClick={() => getResource(prevPage)}
      />
      <UiButton
        text="Prev"
        disabled={!nextPage}
        onClick={() => getResource(nextPage)}
      />
    
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

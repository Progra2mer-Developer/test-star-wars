import React from "react";
import PropTypes from "prop-types";

import s from "./PeopleItem.module.css";
import { Link } from "react-router-dom";
import {
  PEOPLE_PAGE_ROUTE,
} from "../../../constants/constants";

const PeopleItem = ({ img, name, id }) => {
  return (
    <div className={s.peopleItem}>
      <Link to={`${PEOPLE_PAGE_ROUTE}/:${id}`}>
        <img src={img} alt={name} className={s.photo} />
        <div className={s.text}>{name}</div>
      </Link>
    </div>
  );
};
PeopleItem.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
};

export default PeopleItem;

import React from "react";

import { useDispatch } from "react-redux";
import {
  removePersonFromFavourite,
  setPersonToFavourite,
} from "../../../store/actions";

import PropTypes from "prop-types";
import s from "./PersonPhoto.module.css";


const PersonPhoto = ({ photo }) => {
  const dispatch = useDispatch();
  return (
    <div className={s.personPhoto}>
      <img src={photo} alt={photo} className={s.photo} />;
      <button
        onClick={() => {
          dispatch(setPersonToFavourite());
        }}
      >
        Remove
      </button>
      <button
        onClick={() => {
          dispatch(removePersonFromFavourite());
        }}
      >
        Add
      </button>
    </div>
  );
};

PersonPhoto.propTypes = {
  photo: PropTypes.string,
};

export default PersonPhoto;

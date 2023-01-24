import React from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  removePersonFromFavourite,
  setPersonToFavourite,
} from "../../../store/actions";

import favorite from "./img/favorite.svg";
import favoriteFill from "./img/favorite-fill.svg";
import PropTypes from "prop-types";
import s from "./PersonPhoto.module.css";

const PersonPhoto = ({
  photo,
  personName,
  personId,
  setPersonFavourite,
  personFavourite,
}) => {
  const storeDate = useSelector((state) => state.favouriteReducer);
  const dispatch = useDispatch();
  const dispatchFavouritePeople = () => {
    if (personFavourite) {
      dispatch(removePersonFromFavourite(personId));
      setPersonFavourite(false);
    } else {
      dispatch(
        setPersonToFavourite({
          [personId]: { img: photo, name: personName },
        })
      );

      setPersonFavourite(true);
    }
  };
  return (
    <div className={s.personPhoto}>
      <img src={photo} alt={photo} className={s.photo} />;
      <img
        onClick={dispatchFavouritePeople}
        src={personFavourite ? favoriteFill : favorite}
        alt="img"
        className={s.favourite}
      />
    </div>
  );
};

PersonPhoto.propTypes = {
  photo: PropTypes.string,
  personName: PropTypes.string,
  personId: PropTypes.string,
  setPersonFavourite: PropTypes.func,
  personFavourite: PropTypes.bool,
};

export default PersonPhoto;

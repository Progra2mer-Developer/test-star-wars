import React from "react";

import PropTypes from "prop-types";

import s from "./PersonPhoto.module.css";

const PersonPhoto = ({ photo }) => {
  return (
    <div className={s.personPhoto}>
      <img src={photo} alt={photo} className={s.photo} />;
    </div>
  );
};

PersonPhoto.propTypes = {
  photo: PropTypes.string,
};

export default PersonPhoto;

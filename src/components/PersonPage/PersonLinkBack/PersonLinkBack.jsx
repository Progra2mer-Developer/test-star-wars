import React from "react";
import { useNavigate, useHistory } from "react-router-dom";
import backSvg from "./img/back.svg";

import s from "./PersonLinkBack.module.css";

const PersonLinkBack = () => {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate(-1)} className={s.btn}>

        
      <img src={backSvg} alt="Goback"className={s.img} />
      <span className={s.text}>Go Back</span>
    </button>
  );
};

export default PersonLinkBack;

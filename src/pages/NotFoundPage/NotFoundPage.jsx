import React from "react";
import { useLocation } from "react-router-dom";
import img from "./img/not-found.jpg";

import s from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <div className={s.notFoundPage}>
      <img src={img} alt="not-found" className={s.img} />
      {pathname !== "/not-found" ? (
        <p className={s.text}>
          Not match for <u className={s.path}>{pathname}</u>
        </p>
      ) : null}
    </div>
  );
};

export default NotFoundPage;

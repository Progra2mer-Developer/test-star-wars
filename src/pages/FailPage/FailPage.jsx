import React from "react";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

import s from "./FailPage.module.css";

const FailPage = () => {
  return (
    <div className={s.failPage}>
      <ErrorMessage />
    </div>
  );
};

export default FailPage;

import React from "react";

import s from "./ErrorMessage.module.css";

const ErrorMessage = () => {
  return (
    <div className={s.error}>
      The dark side of the force has won.
      <br />
      We cannot display data.
      <br />
      Come back when we fix everything
    </div>
  );
};

export default ErrorMessage;

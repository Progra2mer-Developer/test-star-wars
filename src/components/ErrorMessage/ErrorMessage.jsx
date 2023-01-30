import React from "react";
import UiVideo from "../Ui/UiVideo/UiVideo";

import video from "./video/han-solo.mp4";

import s from "./ErrorMessage.module.css";

const ErrorMessage = () => {
  return (
    <>
      <div className={s.error}>
        The dark side of the force has won.
        <br />
        We cannot display data.
        <br />
        Come back when we fix everything
      </div>
      <UiVideo classes={s.video} playbackRate={1.0} src={video} />
    </>
  );
};

export default ErrorMessage;

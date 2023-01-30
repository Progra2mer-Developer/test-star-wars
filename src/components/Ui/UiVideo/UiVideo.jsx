import React, { useEffect, useRef } from "react";

import PropTypes from "prop-types";
import cn from "classnames";
import s from "./UiVideo.module.css";

const UiVideo = ({ src, classes, playbackrate = 1.0 }) => {
  const videoRef = useRef();
  useEffect(() => {
    videoRef.current.playbackrate = playbackrate;
  }, []);
  return (
    <video
      ref={videoRef}
      playbackrate={playbackrate}
      loop
      autoPlay
      muted
      className={cn(s.video, classes)}
    >
      <source src={src} />
    </video>
  );
};

UiVideo.propTypes = {
  src: PropTypes.string,
  classes: PropTypes.string,
  playbackRate: PropTypes.number,
};

export default UiVideo;

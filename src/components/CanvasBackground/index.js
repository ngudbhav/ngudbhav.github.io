import React, { useEffect, useState, useRef } from "react";

import './index.scss';
import useParticle from "hooks/useParticle";
import { IMAGES } from "utils/constants/canvas";

const CanvasBackground = ({ id, ...remainingProps }) => {
  const canvasEl = useRef(null);
  const [ canvas, setCanvas ] = useState(null);

  useEffect(() => {
    setCanvas(canvasEl.current);
  }, []);

  useParticle(IMAGES[IMAGES.length * Math.random() | 0], canvas);

  return <canvas id={id} ref={canvasEl} { ...remainingProps } />
};

export default CanvasBackground;

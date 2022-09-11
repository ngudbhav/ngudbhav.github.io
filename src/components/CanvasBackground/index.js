import React, { useEffect, useState, useRef } from "react";

import useParticle from "hooks/useParticle";
import { IMAGES } from "utils/constants/canvas";

const CanvasBackground = ({ ...props }) => {
  const canvasEl = useRef(null);
  const [ canvas, setCanvas ] = useState(null);

  useEffect(() => {
    setCanvas(canvasEl.current);
  }, []);

  useParticle(IMAGES[IMAGES.length * Math.random() | 0], canvas);

  return (
    <canvas
      ref={canvasEl}
      className="full-height full-width"
      { ...props }
    />
  )
};

export default CanvasBackground;

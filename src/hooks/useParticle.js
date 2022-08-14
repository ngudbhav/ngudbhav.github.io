import { useCallback, useEffect, useState } from "react";

import Particle from "../lib/Particle";
import { RADIUS } from "../utils/constants/canvas";

const MOUSE_POSITION = { x: null, y: null, radius: RADIUS };
let particles = [];

/**
 *
 * @param imageSource {string}
 * @param canvasElement {HTMLCanvasElement}
 */
function useParticle(imageSource, canvasElement) {
  const [ image ] = useState(imageSource);
  const [ img, setImageLoaded ] = useState(null);
  const [ context, setCanvasContext ] = useState(null);

  const setMousePosition = useCallback(event => {
    if (!canvasElement) return;

    MOUSE_POSITION.x = event.x + canvasElement.clientLeft / 2;
    MOUSE_POSITION.y = event.y + canvasElement.clientTop / 2;
  }, [canvasElement]);

  const initialiseParticles = useCallback(dimensions => {
    if (!canvasElement || !img) return;

    particles = [];

    for (let y = 0, y2 = dimensions.height; y < y2; y += 1) {
      for (let x = 0, x2 = dimensions.width; x < x2; x += 1) {
        if (dimensions.data[(y * 4 * dimensions.width) + (x * 4) + 3] > 128) {
          let positionX = x;
          let positionY = y;
          let color = `rgb(${dimensions.data[(y * 4 * dimensions.width) + (x * 4)]}
            , ${dimensions.data[(y * 4 * dimensions.width) + (x * 4) + 1]}
            , ${dimensions.data[(y * 4 * dimensions.width) + (x * 4) + 2]}
            )`;
          let newX = (positionX * 4) + canvasElement.width / 2 - img.width * 2
          let newY = (positionY * 4) + canvasElement.height / 2 - img.height * 2
          particles.push(new Particle(
            newX, newY, color, canvasElement, MOUSE_POSITION,
          ));
        }
      }
    }
  }, [canvasElement, img]);

  const setCanvasDimensions = useCallback(() => {
    if (!canvasElement) return;

    canvasElement.width = window.innerWidth;
    canvasElement.height = window.innerHeight;
  }, [canvasElement]);

  const animate = useCallback(() => {
    requestAnimationFrame(animate);

    context.fillStyle = 'rgba(0, 0, 0, 0.05)';
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    for(let i = 0; i < particles.length; i += 1) {
      particles[i].update();
    }
  }, [context]);

  useEffect(() => {
    if (!canvasElement) return;

    const context = canvasElement.getContext('2d');
    setCanvasContext(context);
  }, [canvasElement]);

  useEffect(() => {
    window.addEventListener('mousemove', setMousePosition);
    return () => {
      window.removeEventListener('mousemove', setMousePosition);
    };
  }, [setMousePosition]);

  useEffect(() => {
    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);
    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
    };
  }, [setCanvasDimensions]);

  useEffect(() => {
    const _img = new Image();
    _img.src = image;
    _img.onload = () => {
      setImageLoaded(_img);
    };
  }, [image]);

  useEffect(() => {
    if (!canvasElement || !img || !context) return;

    context.drawImage(img, 0, 0);
    const dimensions = context.getImageData(0, 0, img.width, img.height);
    context.clearRect(0, 0, canvasElement.width, canvasElement.height);
    initialiseParticles(dimensions);
    animate();
  }, [canvasElement, img, context, animate, initialiseParticles]);
}

export default useParticle;
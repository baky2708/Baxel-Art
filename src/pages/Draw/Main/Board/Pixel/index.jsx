/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import Container from './style';
import { useDraw } from '../../../../../context/Provider';

function Pixel({ id }) {
  const [bgColor, setBgColor] = useState();
  // const [startPaint, setStartPaint] = useState(false);
  const [isPainted, setIsPainted] = useState(true);
  const {
    reset,
    size,
    primaryColor,
    secoundColor,
    selectedTool,
    startPaint,
  } = useDraw();

  const paintPrimaryColor = () => {
    setBgColor(primaryColor);
    setIsPainted(true);
  };

  const paintSecoundColor = () => {
    setBgColor(secoundColor);
    setIsPainted(true);
  };

  const erase = () => {
    setIsPainted(false);
    setBgColor('grey');
  };

  const onLeftClick = () => {
    switch (selectedTool) {
      case 'pencil': paintPrimaryColor();
        break;
      case 'erase': erase();
        break;
      default:
        break;
    }
  };

  const onRightClick = (event) => {
    switch (selectedTool) {
      case 'pencil': paintSecoundColor();
        break;
      case 'erase': erase();
        break;
      default:
        break;
    }
    event.preventDefault();
  };

  useEffect(() => {
    setIsPainted(false);
    setBgColor('grey');
  }, [reset]);

  return (
    <Container
      onMouseOver={startPaint ? onLeftClick : undefined}
      onContextMenu={startPaint ? onRightClick : undefined}
      bgColor={bgColor}
      key={id}
      id={id}
      size={size}
      painted={isPainted}
      className="pixelsBoard"
    />
  );
}

export default Pixel;

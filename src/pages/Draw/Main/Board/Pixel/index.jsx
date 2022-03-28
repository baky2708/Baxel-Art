/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import Container from './style';
import { useDraw } from '../../../../../context/Provider';

function Pixel({ id }) {
  const [bgColor, setBgColor] = useState();
  const [isPainted, setIsPainted] = useState(false);
  const {
    reset,
    size,
    primaryColor,
    secoundColor,
    selectedTool,
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
      onClick={onLeftClick}
      onContextMenu={onRightClick}
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

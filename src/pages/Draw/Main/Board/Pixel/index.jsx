/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Container from './style';
import { useDraw } from '../../../../../context/Provider';

function Pixel({ id }) {
  const [bgColor, setBgColor] = useState();
  const [isPainted, setIsPainted] = useState(false);
  const { size, selectedColor } = useDraw();
  const paint = () => {
    setBgColor(selectedColor);
    setIsPainted(true);
  };
  return (
    <Container
      onClick={paint}
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

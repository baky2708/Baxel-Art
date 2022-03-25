/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import Container from './style';
import { useDraw } from '../../../../../context/Provider';

function Pixel({ id }) {
  const [bgColor, setBgColor] = useState();
  const [isPainted, setIsPainted] = useState(false);
  const { reset, size, selectedColor } = useDraw();

  const paint = () => {
    setBgColor(selectedColor);
    setIsPainted(true);
  };

  useEffect(() => {
    setIsPainted(false);
    setBgColor('grey');
  }, [reset]);

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

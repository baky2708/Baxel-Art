/* eslint-disable react/prop-types */
import React from 'react';
import Container from './style';
import { useDraw } from '../../../../../context/Provider';

function Pixel({ index, id }) {
  const { size } = useDraw();
  return (
    <Container key={index} id={id} size={size} />
  );
}

export default Pixel;

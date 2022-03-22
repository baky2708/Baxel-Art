/* eslint-disable react/prop-types */
import React from 'react';
import Container from './styles';

function Pixel({ index }) {
  return (
    <Container
      key={index}
      bgColor="red"
      size="5"
    />
  );
}

export default Pixel;

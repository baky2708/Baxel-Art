/* eslint-disable react/prop-types */
import React from 'react';
import Container from './style';

function Pixel({ index, id }) {
  return (
    <Container key={index} id={id} />
  );
}

export default Pixel;

/* eslint-disable react/prop-types */
import React from 'react';
import Container from './style';

function Button({ children, color, hover }) {
  return (
    <Container color={color} hover={hover}>
      {children}
    </Container>
  );
}

export default Button;

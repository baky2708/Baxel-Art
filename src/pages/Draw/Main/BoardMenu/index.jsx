import React from 'react';
import Container from './styles';
import ColorsBlock from './ColorsBlock';
import InputSize from './InputSize';

function BoardMenu() {
  return (
    <Container>
      <InputSize />
      <ColorsBlock />
    </Container>
  );
}

export default BoardMenu;

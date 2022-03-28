import React from 'react';
import Container from './styles';
import ColorsSelection from './ColorsSelection';
import Pencil from './Pencil';
import Erase from './Erase';

function BoardTools() {
  return (
    <Container>
      <Pencil />
      <Erase />
      <ColorsSelection />
    </Container>
  );
}

export default BoardTools;

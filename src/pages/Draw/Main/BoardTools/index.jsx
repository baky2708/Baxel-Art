import React from 'react';
import Container from './styles';
import ColorsSelection from './ColorsSelection';
import Pencil from './Pencil';
import Erase from './Erase';
import Help from './Help';

function BoardTools() {
  return (
    <Container>
      <Pencil />
      <Erase />
      <ColorsSelection />
      <Help />
    </Container>
  );
}

export default BoardTools;

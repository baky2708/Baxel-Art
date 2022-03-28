import React from 'react';
import Container from './styles';
import ColorsBlock from './ColorsBlock';
import InputSize from './InputSize';
import ButtonExport from './ButtonExport';

function BoardMenu() {
  return (
    <Container>
      <InputSize />
      <ColorsBlock />
      <ButtonExport />
    </Container>
  );
}

export default BoardMenu;

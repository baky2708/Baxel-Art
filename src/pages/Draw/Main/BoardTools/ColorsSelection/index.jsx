import React from 'react';
import {
  Container,
  PrimaryColor,
  SecoundColor,
} from './style';
import { useDraw } from '../../../../../context/Provider';

function ColorsSelection() {
  const { primaryColor, secoundColor, openMenu } = useDraw();
  return (
    <Container>
      <PrimaryColor color={primaryColor} menu={openMenu} />
      <SecoundColor color={secoundColor} menu={openMenu} />
    </Container>
  );
}

export default ColorsSelection;

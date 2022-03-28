import React from 'react';
import {
  Container,
  PrimaryColor,
  SecoundColor,
  Default,
  DefaultBlack,
  DefaultWhite,
} from './style';
import { useDraw } from '../../../../../context/Provider';

function ColorsSelection() {
  const {
    primaryColor,
    secoundColor,
    openMenu,
    setPrimaryColor,
    setSecoundColor,
  } = useDraw();

  const setDefaultColors = () => {
    setPrimaryColor('black');
    setSecoundColor('white');
  };
  return (
    <Container>
      <PrimaryColor color={primaryColor} menu={openMenu} />
      <SecoundColor color={secoundColor} menu={openMenu} />
      <Default onClick={setDefaultColors}>
        <DefaultBlack menu={openMenu} />
        <DefaultWhite menu={openMenu} />
      </Default>
    </Container>
  );
}

export default ColorsSelection;

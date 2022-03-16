import React from 'react';
import {
  Container,
} from './styles';
import iconMenu from '../../../../assets/icons/icon-menu-black.svg';

function Menu() {
  return (
    <Container>
      <img src={iconMenu} alt="icon-menu" />
    </Container>
  );
}

export default Menu;

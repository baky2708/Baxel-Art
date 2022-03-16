import React, { useState } from 'react';
import {
  Container,
  SideMenu,
} from './styles';
import iconMenu from '../../../assets/icons/icon-menu-black.svg';

function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container onClick={toggle}>
      <img src={iconMenu} alt="icon-menu" />
      <SideMenu isOpen={isOpen} />
    </Container>
  );
}

export default Menu;

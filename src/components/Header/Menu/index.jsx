import React, { useState } from 'react';
import {
  Container,
  SideMenu,
  Avatar,
} from './styles';
import Nav from './Nav';
import iconMenu from '../../../assets/icons/icon-menu-black.svg';
import avatar from '../../../assets/avatar.svg';

function Menu() {
  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Container onClick={toggle}>
        <img src={iconMenu} alt="icon-menu" />
      </Container>
      <SideMenu isOpen={isOpen}>
        <Avatar to="/login">
          <img src={avatar} alt="avatar" />
          <p>Login</p>
        </Avatar>
        <Nav />
      </SideMenu>
    </>
  );
}

export default Menu;

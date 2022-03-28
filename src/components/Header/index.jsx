/* eslint-disable react/prop-types */
import React from 'react';
import {
  Container,
} from './styles';
import Logo from './Logo';
import LoginBtns from './LoginBtns';
import NavBar from './NavBar';
import SearchBar from './SearchBar';
import Menu from './Menu';

function Header({ color }) {
  return (
    <Container color={color}>
      <Menu color={color} />
      <Logo />
      <SearchBar color={color} />
      <NavBar />
      <LoginBtns />
    </Container>
  );
}

export default Header;

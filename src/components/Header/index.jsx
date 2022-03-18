import React from 'react';
import {
  Container,
} from './styles';
import Logo from './Logo';
import LoginBtns from './LoginBtns';
import NavBar from './NavBar';
import SearchBar from './SearchBar';
import Menu from './Menu';

function Header() {
  return (
    <Container>
      <Menu />
      <Logo />
      <SearchBar />
      <NavBar />
      <LoginBtns />
    </Container>
  );
}

export default Header;

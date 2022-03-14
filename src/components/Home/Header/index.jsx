import React from 'react';
import {
  Container,
  Menu,
} from './styles';
import Logo from './Logo';
import LoginBtns from './LoginBtns';
import NavBar from './NavBar';
import SearchBar from './SearchBar';

function Header() {
  return (
    <Container>
      <Menu>
        menu
      </Menu>
      <Logo />
      <SearchBar />
      <NavBar />
      <LoginBtns />
    </Container>
  );
}

export default Header;

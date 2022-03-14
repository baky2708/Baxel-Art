import React from 'react';
import {
  Container,
  Menu,
  SearchBar,
} from './styles';
import Logo from './Logo';
import LoginBtns from './LoginBtns';
import NavBar from './NavBar';

function Header() {
  return (
    <Container>
      <Menu>
        menu
      </Menu>
      <Logo />
      <SearchBar>search</SearchBar>
      <NavBar />
      <LoginBtns />
    </Container>
  );
}

export default Header;

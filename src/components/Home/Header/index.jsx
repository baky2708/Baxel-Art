import React from 'react';
import {
  Container,
  Menu,
  SearchBar,
  NavBar,
} from './styles';
import Logo from './Logo';
import LoginBtns from './LoginBtns';

function Header() {
  return (
    <Container>
      <Menu>
        menu
      </Menu>
      <Logo />
      <SearchBar>search</SearchBar>
      <NavBar>nav</NavBar>
      <LoginBtns />
    </Container>
  );
}

export default Header;

import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  NavBar,
  Menu,
} from './styles';
import Button from '../../utils/Button';
import logo from '../../../assets/logo-blue.png';

function Header() {
  return (
    <Container>
      <NavBar>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <Menu>
          <Link to="createaccount">
            <p>Create account</p>
          </Link>
          <Link to="login">
            <Button>Login</Button>
          </Link>
        </Menu>
      </NavBar>
    </Container>
  );
}

export default Header;

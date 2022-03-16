import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Nav,
} from './styles';

function NavBar() {
  return (
    <Container>
      <Nav>
        <Link to="/">
          <li>
            <img src="" alt="icon-house" />
            <p>Home</p>
          </li>
        </Link>
        <Link to="/gallery">
          <li>
            <img src="" alt="icon-book" />
            <p>Gallery</p>
          </li>
        </Link>
      </Nav>
    </Container>
  );
}

export default NavBar;

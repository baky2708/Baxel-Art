import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Nav,
} from './styles';
import iconHouse from '../../../../assets/icons/icon-house-yellow.svg';
import iconBook from '../../../../assets/icons/icon-book-blue.svg';

function NavBar() {
  return (
    <Container>
      <Nav>
        <Link to="/">
          <li>
            <img src={iconHouse} alt="icon-house" />
            <p>Home</p>
          </li>
        </Link>
        <Link to="/gallery">
          <li>
            <img src={iconBook} alt="icon-book" />
            <p>Gallery</p>
          </li>
        </Link>
      </Nav>
    </Container>
  );
}

export default NavBar;

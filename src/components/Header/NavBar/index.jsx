import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Nav,
} from './styles';
import iconHouse from '../../../assets/icons/icon-house-yellow.svg';
import iconBook from '../../../assets/icons/icon-book-blue.svg';
import iconAbout from '../../../assets/icons/icon-about.svg';

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
        <Link to="/about">
          <li>
            <img src={iconAbout} alt="icon-house" />
            <p>About</p>
          </li>
        </Link>
      </Nav>
    </Container>
  );
}

export default NavBar;

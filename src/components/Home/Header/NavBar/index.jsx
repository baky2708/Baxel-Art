import React from 'react';
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
        <li>
          <img src={iconHouse} alt="icon-house" />
          <p>Home</p>
        </li>
        <li>
          <img src={iconBook} alt="icon-book" />
          <p>Gallery</p>
        </li>
      </Nav>
    </Container>
  );
}

export default NavBar;

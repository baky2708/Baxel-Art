import React from 'react';
import {
  Container,
  Input,
} from './styles';
import iconFind from '../../../assets/icons/icon-find-black.svg';

function NavBar() {
  return (
    <Container>
      <Input type="text" placeholder="Search" />
      <img src={iconFind} alt="icon-find" />
    </Container>
  );
}

export default NavBar;

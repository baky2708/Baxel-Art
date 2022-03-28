import React from 'react';
import Container from './style';

function Help() {
  return (
    <Container>
      <h1>Help</h1>
      <p>
        Press
        <span> p </span>
        for pencil
      </p>
      <p>
        Press
        <span> e </span>
        for erase
      </p>
      <p>
        Press
        <span> r </span>
        for reset
      </p>
      <p>
        Press
        <span> d </span>
        for default
      </p>
    </Container>
  );
}

export default Help;

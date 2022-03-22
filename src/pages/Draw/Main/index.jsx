import React from 'react';
import Board from './Board';
import BoardMenu from './BoardMenu';
import BoardTools from './BoardTools';

import {
  Container,
} from './styles';

function Main() {
  return (
    <Container>
      <BoardTools />
      <Board />
      <BoardMenu />
    </Container>
  );
}

export default Main;

import React from 'react';
import Board from './Board';
import BoardTools from './BoardTools';
import BoardMenu from './BoardMenu';

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

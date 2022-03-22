import React from 'react';
import {
  Container,
  BoardContainer,
} from './styles';

import Pixel from './Pixel';

function Board() {
  const boardSize = 10;
  const line = [];
  const lines = [];

  for (let i = 0; i < boardSize; i += 1) {
    line.push(
      <Pixel id={i} key={i} />,
    );
  }

  for (let i = 0; i < boardSize; i += 1) {
    if (i % 2 === 0) {
      lines.push(line);
    } else {
      lines.push(line.slice().reverse());
    }
  }

  return (
    <Container>
      <BoardContainer>
        {lines.map((e) => e)}
      </BoardContainer>
    </Container>
  );
}

export default Board;

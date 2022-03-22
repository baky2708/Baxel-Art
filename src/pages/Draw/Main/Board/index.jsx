/* eslint-disable max-len */
import React, { useState } from 'react';
import {
  Container,
  BoardContainer,
  Pixel,
} from './styles';

function Board() {
  const [drawOn, setDrawOn] = useState(false);
  // const MIN_BOARD = 15;
  const MAX_BOARD = 2;
  const boardWidth = MAX_BOARD;
  const boardHeight = MAX_BOARD;
  const boardArea = boardWidth * boardHeight;
  const pixels = [];

  const drawing = ({ target }) => {
    if (drawOn) {
      target.setAttribute('style', 'background-color: black;');
      target.setAttribute('style', 'opacity: 1;');
    }
  };

  for (let i = 0; i < boardArea; i += 1) {
    pixels.push(
      <Pixel
        onMouseDown={() => setDrawOn(true)}
        onMouseUp={() => setDrawOn(false)}
      // onMouseLeave={() => setDrawOn(false)}
        onMouseMove={drawing}
        onClick={drawing}
        id={i}
        color={i}
        key={i}
        size={50}
      />,
    );
  }

  return (
    <Container>
      <BoardContainer>
        {pixels.map((e) => e)}
      </BoardContainer>
    </Container>
  );
}

export default Board;

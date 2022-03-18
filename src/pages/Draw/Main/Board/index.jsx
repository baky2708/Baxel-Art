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
  const MAX_BOARD = 50;
  const boardWidth = MAX_BOARD;
  const boardHeight = MAX_BOARD - 1;
  const boardArea = boardWidth * boardHeight;
  const pixels = [];
  // const pixels = new Array(boardArea.fill(1));

  const drawing = ({ target }) => {
    if (drawOn) {
      target.setAttribute('style', 'background-color: black;');
      target.setAttribute('style', 'opacity: 1;');
    }
  };

  for (let i = 0; i < boardArea; i += 1) {
    pixels.push(<Pixel
      onMouseDown={() => setDrawOn(true)}
      // onClick={() => setDrawOn(true)}
      onMouseUp={() => setDrawOn(false)}
      onMouseMove={drawing}
      id={i}
      color={i}
      key={i}
    />);
  }

  return (
    <Container>
      <BoardContainer sizeX={boardWidth} sizeY={boardHeight}>
        {pixels.map((e) => e)}
      </BoardContainer>
    </Container>
  );
}

export default Board;

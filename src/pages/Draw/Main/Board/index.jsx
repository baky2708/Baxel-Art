import React from 'react';
import {
  Container,
  BoardContainer,
} from './styles';

import Pixel from './Pixel';
import { useDraw } from '../../../../context/Provider';

function Board() {
  const { size } = useDraw();

  const createLine = (sizeBoard) => {
    const line = [];
    for (let i = 0; i < sizeBoard; i += 1) {
      line.push(
        <Pixel id={i} key={i} size={sizeBoard} />,
      );
    }
    return line;
  };

  const paintInitialOddPixel = (sizeBoard) => {
    const line = createLine(sizeBoard * sizeBoard);
    return line;
  };

  const paintInitialEvenPixel = (sizeBoard) => {
    const board = [];
    const line = createLine(sizeBoard);
    for (let i = 0; i < sizeBoard; i += 1) {
      if (i % 2 === 0) {
        board.push(line);
      } else {
        board.push(line.slice().reverse());
      }
    }
    return board;
  };

  const drawBoard = (sizeBoard) => {
    if (sizeBoard % 2 === 0) return paintInitialEvenPixel(size);
    return paintInitialOddPixel(size);
  };

  const board = drawBoard(size);

  return (
    <Container>
      <BoardContainer>
        {board.map((e) => e)}
      </BoardContainer>
    </Container>
  );
}

export default Board;

import React from 'react';
import {
  Container,
  BoardContainer,
} from './styles';
import Pixel from './Pixel';

import { useDraw } from '../../../../context/Provider';

function Board() {
  const { size } = useDraw();

  const createRow = (sizeBoard) => {
    const row = [];
    for (let i = 0; i < sizeBoard; i += 1) {
      row.push(
        <Pixel id={i} key={i} size={sizeBoard} />,
      );
    }
    return row;
  };

  const paintInitialOddPixel = (sizeBoard) => {
    const board = createRow(sizeBoard * sizeBoard);
    return board;
  };

  const paintInitialEvenPixel = (sizeBoard) => {
    const board = [];
    const row = createRow(sizeBoard);
    for (let i = 0; i < sizeBoard; i += 1) {
      if (i % 2 === 0) {
        board.push(row);
      } else {
        board.push(row.slice().reverse());
      }
    }
    return board;
  };

  const drawBoard = (sizeBoard) => {
    if (sizeBoard % 2 === 0) return paintInitialEvenPixel(sizeBoard);
    return paintInitialOddPixel(sizeBoard);
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

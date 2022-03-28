import React, { useEffect, useRef } from 'react';
import {
  Container,
  BoardContainer,
} from './styles';
import Pixel from './Pixel';

import {
  useDraw,
} from '../../../../context/Provider';

function Board() {
  const boardContainer = useRef();
  const {
    size,
    setStartPaint,
    setButtonPressed,
    refBoard,
    setRefBoard,
  } = useDraw();

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

  useEffect(() => {
    setRefBoard(boardContainer);
  }, []);

  return (
    <Container>
      <BoardContainer
        onMouseDown={() => {
          setStartPaint(true);
          setButtonPressed(1);
        }}
        onDragStart={(event) => event.preventDefault()}
        onMouseUp={() => setStartPaint(false)}
        ref={refBoard}
        onContextMenu={(event) => {
          setButtonPressed(2);
          event.preventDefault();
        }}
      >
        {drawBoard(size).map((e) => e)}
      </BoardContainer>
    </Container>
  );
}

export default Board;

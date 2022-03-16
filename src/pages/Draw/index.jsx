import React from 'react';
import Header from '../../components/Header';
import Board from '../../components/pages/Draw/Main/Board';
import BoardMenu from '../../components/pages/Draw/Main/BoardMenu';
import BoardTools from '../../components/pages/Draw/Main/BoardTools';
import Container from './styles';

function Draw() {
  return (
    <Container>
      <Header />
      <Board />
      <BoardMenu />
      <BoardTools />
    </Container>
  );
}

export default Draw;

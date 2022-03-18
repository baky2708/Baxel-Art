import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Main from '../../components/pages/Draw/Main';
import Container from './styles';

function Draw() {
  return (
    <Container>
      <Header />
      <Main />
      <Footer />
    </Container>
  );
}

export default Draw;

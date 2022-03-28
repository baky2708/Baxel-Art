import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Main from './Main';
import Container from './styles';

function Draw() {
  return (
    <Container>
      <Header color="#444" />
      <Main />
      <Footer />
    </Container>
  );
}

export default Draw;

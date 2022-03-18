import React from 'react';
import Header from '../../components/Header';
import Main from '../../components/pages/Home/Main';
import Footer from '../../components/Footer';
import Container from './styles';

function Home() {
  return (
    <Container>
      <Header />
      <Main />
      <Footer />
    </Container>
  );
}

export default Home;

import React from 'react';
import {
  Container,
  Main,
} from './styles';
import Header from '../../components/Home/Header';
import PaintMenu from '../../components/Home/PaintMenu';
import DrawBoard from '../../components/Home/DrawBoard';
import SideMenu from '../../components/Home/SideMenu';
import Footer from '../../components/Home/Footer';

function Home() {
  return (
    <Container>
      <Header />
      <Main>
        <PaintMenu />
        <DrawBoard />
        <SideMenu />
      </Main>
      <Footer />
    </Container>
  );
}

export default Home;

/* eslint-disable consistent-return */
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Main from './Main';
import Container from './styles';
import { useDraw } from '../../context/Provider';

function Draw() {
  const {
    setSelectedTool,
    setPrimaryColor,
    setSecoundColor,
    reset,
    setReset,
  } = useDraw();
  const keyMaps = (event) => {
    switch (event.key) {
      case 'p': setSelectedTool('pencil');
        break;
      case 'e': setSelectedTool('erase');
        break;
      case 'd':
        setPrimaryColor('black');
        setSecoundColor('white');
        break;
      case 'r': setReset(reset + 1);
        break;

      default:
        break;
    }
  };

  return (
    <Container
      onKeyDown={keyMaps}
      tabIndex="0"
    >
      <Header color="#444" />
      <Main />
      <Footer />
    </Container>
  );
}

export default Draw;

import React from 'react';
import {
  Container,
  ColorsContainer,
  Colors,
} from './styles';

function ColorsBrock() {
  const rainbowColors = [
    '#9400D3',
    '#4B0082',
    '#0000FF',
    '#00FF00',
    '#FFFF00',
    '#FF7F00',
    '#FF0000',
  ];

  const generateRandomColors = () => {
    const colorsLength = 7;
    const colors = [];
    for (let i = 0; i < colorsLength; i += 1) {
      colors.push(`#${Math.random().toString(16).substr(2, 6)}`);
    }
    return colors;
  };

  const randomColors = generateRandomColors();
  return (
    <Container>
      <p>Rainbow Colors</p>
      <ColorsContainer>
        {rainbowColors.map((e) => <Colors key={e} bgColor={e} />)}
      </ColorsContainer>
      <p>Random Colors</p>
      <ColorsContainer>
        {randomColors && randomColors.map((e) => <Colors key={e} bgColor={e} />)}
      </ColorsContainer>
    </Container>
  );
}

export default ColorsBrock;

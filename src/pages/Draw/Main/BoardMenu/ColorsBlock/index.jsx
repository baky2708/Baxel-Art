import React, { useEffect, useState } from 'react';
import {
  Container,
  ColorsContainer,
  Colors,
} from './styles';

import { useDraw } from '../../../../../context/Provider';

function ColorsBlock() {
  const { setSelectedColor } = useDraw();
  const [randomColor, setRandomColor] = useState();
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

  const onClick = ({ target }) => {
    const colors = document.querySelectorAll('.colorsPallet');
    colors.forEach((e) => e.classList.remove('selected'));
    setSelectedColor(target.id);
    target.classList.add('selected');
  };

  useEffect(() => {
    setRandomColor(generateRandomColors());
  }, []);

  return (
    <Container>
      <p>Rainbow Colors</p>
      <ColorsContainer>
        {rainbowColors.map((e) => (
          <Colors onClick={onClick} className="colorsPallet" isSelected={false} key={e} bgColor={e} />))}
      </ColorsContainer>
      <p>Random Colors</p>
      <ColorsContainer>
        {randomColor && randomColor.map((e) => (
          <Colors id={e} key={e} bgColor={e} />))}
      </ColorsContainer>
    </Container>
  );
}

export default ColorsBlock;

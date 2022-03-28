import React, { useEffect, useState } from 'react';
import {
  Container,
  ColorsContainer,
  Colors,
} from './styles';

import { useDraw } from '../../../../../context/Provider';

function ColorsBlock() {
  const { setPrimaryColor, setSecoundColor } = useDraw();
  const [randomColors, setRandomColors] = useState();
  const rainbowColors = [
    '#9400D3',
    '#4B0082',
    '#0000FF',
    '#00FF00',
    '#FFFF00',
    '#FF7F00',
    '#FF0000',
  ];

  const defaultColors = [
    'black',
    'white',
  ];

  const generateRandomColors = () => {
    const colorsLength = 7;
    const colors = [];
    for (let i = 0; i < colorsLength; i += 1) {
      colors.push(`#${Math.random().toString(16).substr(2, 6)}`);
    }
    return colors;
  };

  const onLeftClick = ({ target }) => {
    const colors = document.querySelectorAll('.colorsPallet');
    colors.forEach((e) => e.classList.remove('selected'));
    setPrimaryColor(target.id);
    target.classList.add('selected');
  };

  const onRightClick = (event) => {
    const colors = document.querySelectorAll('.colorsPallet');
    colors.forEach((e) => e.classList.remove('selected'));
    setSecoundColor(event.target.id);
    event.target.classList.add('selected');
    event.preventDefault();
  };

  useEffect(() => {
    setRandomColors(generateRandomColors());
  }, []);

  return (
    <Container>
      <p>Rainbow Colors</p>
      <ColorsContainer>
        {rainbowColors.map((e) => (
          <Colors
            onClick={onLeftClick}
            onContextMenu={onRightClick}
            className="colorsPallet"
            id={e}
            key={e}
            bgColor={e}
          />
        ))}
      </ColorsContainer>
      <p>Random Colors</p>
      <ColorsContainer>
        {randomColors && randomColors.map((e) => (
          <Colors
            onClick={onLeftClick}
            onContextMenu={onRightClick}
            className="colorsPallet"
            id={e}
            key={e}
            bgColor={e}
          />
        ))}
      </ColorsContainer>
      <p>Default Colors</p>
      <ColorsContainer>
        {defaultColors && defaultColors.map((e) => (
          <Colors
            onClick={onLeftClick}
            onContextMenu={onRightClick}
            className="colorsPallet"
            id={e}
            key={e}
            bgColor={e}
          />
        ))}
      </ColorsContainer>
    </Container>
  );
}

export default ColorsBlock;

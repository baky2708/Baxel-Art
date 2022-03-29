import React, { useState } from 'react';
import { useDraw } from '../../../../../context/Provider';
import Container from './styles';

function InputSize() {
  const {
    size, setSize, setReset, reset,
  } = useDraw();
  const [inputValue, setInputValue] = useState(size);

  const onChange = ({ target }) => {
    setInputValue(target.value);
  };

  const resetBoard = () => {
    setReset(reset + 1);
  };

  const changeBoardSize = () => {
    const MAX_SIZE = 50;
    const MIN_SIZE = 2;
    if (inputValue > MAX_SIZE) {
      return setSize(MAX_SIZE);
    }
    if (inputValue < MIN_SIZE) {
      return setSize(MIN_SIZE);
    }
    return setSize(inputValue);
  };

  const pressEnter = (event) => {
    if (event.key === 'Enter') {
      changeBoardSize();
    }
  };

  return (
    <Container>
      <label htmlFor="size">
        <p>Board Size</p>
        <input
          type="number"
          onChange={onChange}
          value={inputValue}
          onKeyDown={pressEnter}
        />
      </label>
      <button onClick={changeBoardSize} type="button">Change</button>
      <button onClick={resetBoard} type="button">Reset</button>
    </Container>
  );
}

export default InputSize;

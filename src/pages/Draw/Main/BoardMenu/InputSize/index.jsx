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
    setSize(inputValue);
  };

  return (
    <Container>
      <label htmlFor="size">
        <p>Board Size</p>
        <input type="number" onChange={onChange} value={inputValue} />
      </label>
      <button onClick={changeBoardSize} type="button">Change</button>
      <button onClick={resetBoard} type="button">Reset</button>
    </Container>
  );
}

export default InputSize;

import React, { useState, useEffect } from 'react';
import { useDraw } from '../../../../../context/Provider';
import Container from './styles';

function InputSize() {
  const { size, setSize, reset } = useDraw();
  const [inputValue, setInputValue] = useState(size);

  const onChange = ({ target }) => {
    setInputValue(target.value);
  };

  const resetBoard = () => {
    setSize(size + 1);
  };

  useEffect(() => {
    console.log(reset);
  }, [reset]);

  return (
    <Container>
      <label htmlFor="size">
        <p>Board Size</p>
        <input type="number" onChange={onChange} value={inputValue} />
      </label>
      <button onClick={resetBoard} type="button">Reset</button>
    </Container>
  );
}

export default InputSize;

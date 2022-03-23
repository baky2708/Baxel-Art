import React, { useState, useEffect } from 'react';
import { useDraw } from '../../../../../context/Provider';
import Container from './styles';

function InputSize() {
  const { size, setSize } = useDraw();
  const [inputValue, setInputValue] = useState(size);

  const onChange = ({ target }) => {
    setInputValue(target.value);
  };

  useEffect(() => {
    setSize(inputValue);
  }, [inputValue]);

  return (
    <Container>
      <label htmlFor="size">
        <p>Board Size</p>
        <input type="number" onChange={onChange} value={inputValue} />
      </label>
    </Container>
  );
}

export default InputSize;

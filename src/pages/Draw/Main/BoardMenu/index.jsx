import React, { useState, useEffect } from 'react';
import Container from './styles';
import { useDraw } from '../../../../context/Provider';

function BoardMenu() {
  const [inputValue, setInputValue] = useState(10);
  const { size, setSize } = useDraw();

  const onChange = ({ target }) => {
    setInputValue(target.value);
  };
  useEffect(() => {
    setSize(inputValue);
    console.log(inputValue);
    console.log(size);
  }, [inputValue]);
  return (
    <Container>
      <label htmlFor="size">
        size
        <input type="number" onChange={onChange} value={inputValue} />
      </label>
    </Container>
  );
}

export default BoardMenu;

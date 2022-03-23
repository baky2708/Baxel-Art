import React, { useState, useEffect } from 'react';
import { useDraw } from '../../../../../context/Provider';

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
    <label htmlFor="size">
      size
      <input type="number" onChange={onChange} value={inputValue} />
    </label>
  );
}

export default InputSize;

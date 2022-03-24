/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/prop-types */
import React, { useState, useContext } from 'react';
import Context from './Context';

export function Provider({ children }) {
  const [size, setSize] = useState(10);
  // const [startColor, setBgColor] = useState('grey');
  const [selectedColor, setSelectedColor] = useState('black');
  const contextValue = {
    size,
    setSize,
    selectedColor,
    setSelectedColor,
    // bgColor,
    // setBgColor,
  };

  return (
    <Context.Provider value={contextValue}>
      {children}
    </Context.Provider>
  );
}

export const useDraw = () => useContext(Context);

/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/prop-types */
import React, { useState, useContext } from 'react';
import Context from './Context';

export function Provider({ children }) {
  const [size, setSize] = useState(10);
  const [selectedTool, setSelectedTool] = useState('erase');
  const [reset, setReset] = useState(0);
  const [openMenu, setOpenMenu] = useState(true);
  const [primaryColor, setPrimaryColor] = useState('black');
  const [secoundColor, setSecoundColor] = useState('white');
  const contextValue = {
    size,
    setSize,
    primaryColor,
    setPrimaryColor,
    secoundColor,
    setSecoundColor,
    reset,
    setReset,
    openMenu,
    setOpenMenu,
    selectedTool,
    setSelectedTool,
  };

  return (
    <Context.Provider value={contextValue}>
      {children}
    </Context.Provider>
  );
}

export const useDraw = () => useContext(Context);

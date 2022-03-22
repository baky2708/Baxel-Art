/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/prop-types */
import React, { useState, useMemo, useContext } from 'react';
import Context from './Context';

export function Provider({ children }) {
  const [size, setSize] = useState(10);
  const contextValue = useMemo(() => ({
    size,
    setSize,
  }), []);

  return (
    <Context.Provider value={contextValue}>
      {children}
    </Context.Provider>
  );
}

export const useDraw = () => useContext(Context);

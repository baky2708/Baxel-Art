/* eslint-disable react/no-array-index-key */
import React from 'react';
import Lines from './Lines';

function Test() {
  const size = 5;
  const lines = new Array(size).fill(1);
  return (
    <div>
      {lines.map((_, i) => <Lines key={`${i}-${size}`} />)}
    </div>
  );
}

export default Test;

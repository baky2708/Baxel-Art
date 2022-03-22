import React from 'react';
import Pixel from './Pixel';

function Lines() {
  const size = 10;
  const pixels = new Array(size).fill(1);
  return (
    <div>
      {pixels.map((_, i) => <Pixel index={i} />)}
    </div>
  );
}

export default Lines;

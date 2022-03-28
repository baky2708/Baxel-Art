import React, { useState, useEffect } from 'react';
import Container from './style';
import iconErase from '../../../../../assets/icons/icon-erase-black.svg';
import { useDraw } from '../../../../../context/Provider';

function Erase() {
  const { setSelectedTool, selectedTool } = useDraw();
  const [selected, setSelected] = useState(selectedTool);
  const selectTool = ({ target }) => {
    setSelectedTool(target.id);
  };

  useEffect(() => {
    setSelected(selectedTool);
  }, [selectedTool]);
  return (
    <Container selected={selected} onClick={selectTool}>
      <img id="erase" src={iconErase} alt="pencil-tool" />
    </Container>
  );
}

export default Erase;

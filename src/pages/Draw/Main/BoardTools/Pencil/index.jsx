import React, { useState, useEffect } from 'react';
import Container from './style';
import iconPencil from '../../../../../assets/icons/icon-pencil-black.svg';
import { useDraw } from '../../../../../context/Provider';

function Pencil() {
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
      <img id="pencil" src={iconPencil} alt="pencil-tool" />
    </Container>
  );
}

export default Pencil;

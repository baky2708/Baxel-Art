import React from 'react';
import { exportComponentAsPNG } from 'react-component-export-image';
import Container from './styles';
import Button from '../../../../../components/Button';
import { useDraw } from '../../../../../context/Provider';

function ButtonExport() {
  const { refBoard } = useDraw();

  return (
    <Container>
      <Button
        type="startDraw"
        onClick={() => exportComponentAsPNG(refBoard)}
      >
        <p>
          Export as PNG
        </p>
      </Button>
    </Container>
  );
}

export default ButtonExport;

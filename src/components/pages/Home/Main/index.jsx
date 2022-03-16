import React from 'react';
import Button from '../../../utils/Button';
import {
  Container,
  ContainerButtons,
} from './styles';

function Main() {
  return (
    <Container>
      <h1>Let&apos;s create art</h1>
      <h2>make pixel art - share with your friends</h2>
      <ContainerButtons>
        <Button icon="pencil" type="startDraw">
          START DRAWING
        </Button>
        <Button icon="person" type="loginAccount">
          START DRAWING
        </Button>
      </ContainerButtons>
    </Container>
  );
}

export default Main;

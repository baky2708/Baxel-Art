import React from 'react';
import { useHistory } from 'react-router-dom';

import Button from '../../../components/Button';
import {
  Container,
  ContainerButtons,
} from './styles';

function Main() {
  const history = useHistory();
  return (
    <Container>
      <h1>Let&apos;s create art</h1>
      <h2>make pixel art - share with your friends</h2>
      <ContainerButtons>
        <Button icon="pencil" type="startDraw" onClick={() => history.push('/draw')}>
          START DRAWING
        </Button>
        <Button icon="person" type="loginAccount" onClick={() => history.push('./login')}>
          START DRAWING
        </Button>
      </ContainerButtons>
    </Container>
  );
}

export default Main;

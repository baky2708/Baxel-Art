import React from 'react';
import Container from './styles';
import Button from '../../../utils/Button';

function LoginBtns() {
  return (
    <Container>
      <Button icon="pencil" type="startDraw">Start Drawing</Button>
      <Button icon="person" type="loginAccount">Login</Button>
    </Container>
  );
}

export default LoginBtns;

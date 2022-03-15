import React from 'react';
import Container from './styles';
import Button from '../../../utils/Button';

function LoginBtns() {
  return (
    <Container>
      <Button icon="pencil" type="startDraw"><p>Start Drawing</p></Button>
      <Button icon="person" type="loginAccount"><p>Login</p></Button>
    </Container>
  );
}

export default LoginBtns;

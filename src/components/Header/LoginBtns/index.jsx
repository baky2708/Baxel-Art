import React from 'react';
import { useHistory } from 'react-router-dom';
import Container from './styles';
import Button from '../../Button';

function LoginBtns() {
  const history = useHistory();
  return (
    <Container>
      <Button
        onClick={() => history.push('/draw')}
        icon="pencil"
        type="startDraw"
      >
        <p>Start Drawing</p>
      </Button>
      <Button
        onClick={() => history.push('/login')}
        icon="person"
        type="loginAccount"
      >
        <p>Login</p>
      </Button>
    </Container>
  );
}

export default LoginBtns;

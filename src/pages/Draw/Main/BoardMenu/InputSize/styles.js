import styled from 'styled-components';

const Container = styled.div`
  margin: 10px;
  label {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  }

  p {
    margin-bottom: 2px;
  }

  input {
    font-size: 18px;
    width: 50%;
    margin-bottom: 10px;
  }
  
  button {
    width: 80%;
    margin-left: 15px;
    margin-bottom: 10px;

  }
`;

export default Container;

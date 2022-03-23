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
  }
`;

export default Container;

import styled from 'styled-components';

const Container = styled.div`
  margin: 10px;
  color: white;
  label {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  }

  p {
    margin-bottom: 2px;
  }

  & input {
    font-size: 18px;
    width: 50%;
    margin-bottom: 10px;
  }

  button {
    width: 80%;
    margin-left: 15px;
    margin-bottom: 10px;
    background-color: black;
    border: 0;
    border-radius: 6px;
    color: white;
    font-size: 18px;
    font-weight: 700;
  }

  button:hover {
    background-color: #222;

  }

  @media (max-width: 460px) {
    font-size: 14px;

    button {

    font-size: 14px;
    }
  }
`;

export default Container;

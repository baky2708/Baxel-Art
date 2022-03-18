import styled from 'styled-components';

export const Container = styled.main`
  /* background-color: #3D2B46; */
  background: linear-gradient(90deg ,#3D2B46,#6E1372,#1B1572);
  color: white;
  font-weight: 700;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 88vh;

  h1 {
    font-size: 80px;
    width: 80%;
    text-align: center;
    margin-bottom: 30px;
  }

  h2 {
    margin-bottom: 30px;
    font-size: 30px;
    width: 80%;
    text-align: center;
    color: #a4c5ff;
  }

  button {
    width: 230px;
    height: 50px;
    font-size: 18px;
    text-align: center;
    margin-bottom: 20px;
    margin-left: 20px;
  }

  @media (max-width: 900px) {
    h1 {
      font-size: 60px;
    }

    h2 {
      font-size: 16px;
    }
  }

  @media (max-width: 762px) {
    h1 {
      font-size: 50px;
    }
  }
`;

export const ContainerButtons = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

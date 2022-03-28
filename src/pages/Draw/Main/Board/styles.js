import styled from 'styled-components';

const boardSize = 550;

export const Container = styled.div`
  background-color: black;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BoardContainer = styled.div`
  width: ${boardSize}px;
  height: ${boardSize}px;
  background-color: white;
  display:flex;
  flex-wrap: wrap;
  align-content: start;

  @media (max-width: 850px) {
    width: 400px;
    height: 400px;
  }

  @media (max-width: 650px) {
    width: 250px;
    height: 250px;
  }
`;

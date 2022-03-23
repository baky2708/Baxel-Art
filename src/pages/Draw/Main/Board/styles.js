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
`;

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
background-color: red;
display:flex;
flex-wrap: wrap;
`;

export const Pixel = styled.div`
width: ${boardSize / 2}px;
height: ${boardSize / 2}px;
  background-color: white;
border: 1px solid black;
`;

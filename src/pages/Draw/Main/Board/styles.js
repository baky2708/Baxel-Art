import styled from 'styled-components';

export const Container = styled.div`
  background-color: black;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BoardContainer = styled.div`
width: ${(props) => props.sizeX};
height: ${(props) => props.sizeY};
background-color: white;
display:grid;
grid-template-columns: repeat(${(props) => props.sizeX}, 10px);
grid-template-columns: repeat(${(props) => props.sizeY}, 10px);

`;

export const Pixel = styled.div`
  width: 10px;
  height: 10px;
  background-color: ${({ color }) => {
    if (color === 'black') return 'black';
    return 'grey';
  }};
  opacity: ${({ color }) => {
    if (color % 2 === 0) return 0;
    return 0.3;
  }};
image-rendering: pixelated;
`;

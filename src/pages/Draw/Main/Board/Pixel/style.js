import styled from 'styled-components';

const boardSize = 550;

const Container = styled.div`
width: ${boardSize / 10}px;
height: ${boardSize / 10}px;
opacity: ${({ id }) => (id % 2 === 0 ? 0 : 0.3)};
background-color: grey;
/* border: 1px solid black; */
`;

export default Container;

import styled from 'styled-components';

const canvasSize = 530;

const Container = styled.div`
width: ${({ size }) => canvasSize / size}px;
background-color: ${({ bgColor }) => bgColor};
`;

export default Container;

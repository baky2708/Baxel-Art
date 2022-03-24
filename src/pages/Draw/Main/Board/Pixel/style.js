import styled from 'styled-components';

const boardSize = 550;

const Container = styled.div`
  & {
    width: ${({ size }) => boardSize / size}px;
    height: ${({ size }) => boardSize / size}px;
    opacity: ${({ id }) => (id % 2 === 0 ? 0 : 0.3)};
  background-color: ${({ bgColor }) => (bgColor || 'grey')};
  }

  &:hover {
    /* background-color: grey; */
    opacity: 0.8;
  }
`;

export default Container;

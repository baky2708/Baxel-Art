import styled, { css } from 'styled-components';

const boardSize = 550;

const Container = styled.div`
  & {
    width: ${({ size }) => boardSize / size}px;
    height: ${({ size }) => boardSize / size}px;
    opacity: ${({ id }) => (id % 2 === 0 ? 0 : 0.3)};
  background-color: ${({ bgColor }) => (bgColor || 'grey')};

  ${({ painted }) => painted === true && css`
    opacity: 1;
  `};
  }

  &:hover {
    /* background-color: grey; */
    opacity: 0.7;
  }

`;

export default Container;

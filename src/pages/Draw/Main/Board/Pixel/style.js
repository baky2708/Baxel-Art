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
    opacity: 0.8;
  }

  @media (max-width: 850px) {
    width: ${({ size }) => 400 / size}px;
    height: ${({ size }) => 400 / size}px;
  }

  @media (max-width: 650px) {
    width: ${({ size }) => 250 / size}px;
    height: ${({ size }) => 250 / size}px;
  }

`;

export default Container;

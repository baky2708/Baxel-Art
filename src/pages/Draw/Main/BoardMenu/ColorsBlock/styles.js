import styled from 'styled-components';

export const Container = styled.div`
/* background-color: red; */
  & {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
  }
`;

export const ColorsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Colors = styled.div`
  & {
    background-color: ${({ bgColor }) => bgColor};
    width: 20px;
    height: 20px;
    margin: 2px 1px;
    border: 1px solid #111;
  }

  &:hover {
    border: 1px solid #fff;
  }
`;

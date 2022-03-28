import styled from 'styled-components';

export const Container = styled.div`
  & {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
  }

    .selected {
      border: 3px solid white;
      padding: 1px;
    }

p {
  color: white;
  font-size: 24px;
}
`;

export const ColorsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;

export const Colors = styled.div`
  & {
    background-color: ${({ bgColor }) => bgColor};
    width: 40px;
    height: 40px;
    margin: 2px 1px;
    border: 1px solid #111;
    border-radius: 50%;
  }
  &:hover {
    border: 5px solid ${({ bgColor }) => bgColor};
    transition-duration: 200ms;
    padding: 1px;
    background-color: white; 
  }
`;

import styled from 'styled-components';

export const Container = styled.div`
  & {
    width: 50px;
    height: 40px;
    background-color: #eff1f2;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 20px;
    border-radius: 10px; 
    transition-duration: 300ms;
    cursor: pointer;
  }

  &:hover {
    background-color: rgba(200,200,200, .8);
  }

  img {
    width: 20px;
    height: 20px;
  }
`;

export const a = 'a';

import styled from 'styled-components';

export const Container = styled.button`
  & {
    border: 0;
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

export const SideMenu = styled.div`
background-color: ${(props) => (props.isOpen ? 'red' : 'blue')};
overflow-y: hidden;
width: 40px;
height: 40px;
`;

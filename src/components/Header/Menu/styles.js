import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.button`
  & {
    border: 0;
    width: 50px;
    height: 40px;
    background-color: ${({ color }) => (color ? '#555' : '#eff1f2')};
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
position: fixed;
top: 60px;
left: 0;
background-color: white;
transform: translateX(${(props) => (props.isOpen ? '-100%' : '0')});
transition-duration: 400ms;
width: 205px;
height: 95vh;
padding: 20px;
display: flex;
flex-direction: column;
align-items: center;
z-index: 999;

nav ul {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
}

nav img {
  width: 20px;
  height: 20px;
}

`;

export const Avatar = styled(Link)`
  & {
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 60px;
    width: 80%;
    height: 30%;
  }

  img {
    width: 80px;
    height: 80px;
    margin-bottom: 20px;
  }

  &:hover {
    background-color: rgba(230,230,230, .8);
  }
`;

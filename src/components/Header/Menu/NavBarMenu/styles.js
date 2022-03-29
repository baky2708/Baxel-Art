import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  height: 60px;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1020px) {
    display: none;
  }
`;

export const Nav = styled.ul`
display: flex;
justify-content: space-around;

li {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 94px;
  height: 38px;
}

li:hover {
  background-color: rgba(0,0,0,.05);
  border-radius: 50px;
}

img {
  margin-right: 10px;
}

`;

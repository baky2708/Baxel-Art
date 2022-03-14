import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  height: 60px;
  justify-content: space-between;
  align-items: center;
`;

export const Nav = styled.ul`
display: flex;
justify-content: space-around;

li {
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

@media (max-width: 1200px) {
  li {
    width: 50px;
    justify-content: center;
  }
  img {
    margin: 0;
  }
  p {
    display: none;
  }
}
`;

import styled from 'styled-components';

export const Container = styled.div`
  width: 80vw;
  margin: 0 auto;
`;

export const NavBar = styled.header`
  & {
    animation: loadAnimation;
    animation-duration: 500ms;
    margin: 30px 0;
    display: flex;
    justify-content: space-between;
  }

  img {
    width: 50px;
  }

  p {
    margin-right: 30px;
    font-size: 22px;
    font-weight: 700;
  }

  @media (max-width: 600px) {
    p {
      display: none;
    }
  }
`;

export const Menu = styled.nav`
  display: flex;
  align-items: center;
`;

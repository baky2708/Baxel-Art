import styled from 'styled-components';

export const Container = styled.header`
`;
export const Main = styled.main`
& {
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  background-color: #F6F6F6;
}
h1 {
  margin-top: 40px;
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 10px;
}
p {
  font-size: 18px;
  margin-bottom: 5px;
}
span {
  font-weight: 700;
}
`;

export const Icons = styled.a`
width: 70px;
height: 70px;
margin: 0 60px;
img {
  width: 100%;
  height: 100%;
}
`;

export const IconsContainer = styled.div`
display: flex;
`;

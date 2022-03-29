import styled from 'styled-components';

export const Container = styled.header`
& {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #44274C;
}

h1 {
  font-size: 48px;
  text-align: center;
  margin-bottom: 10px;
}
h2 {
  font-size: 44px;
  text-align: center;
  margin-bottom: 10px;
}
p {
  font-size: 18px;
  text-align: center;
  margin-bottom: 10px;
}
span {
  font-weight: 700;
}
li {
  margin-left: 8px;
  margin-bottom: 8px;
  font-size: 20px;
}
`;
export const Main = styled.main`
& {
  width: auto;
  margin: 0 20px;
}
`;

export const Section = styled.section`
& {
  margin: 0 20px;
}
`;

export const AboutProjectSection = styled.section`
& {
  margin-top: 20px;
  display: flex;
}
`;

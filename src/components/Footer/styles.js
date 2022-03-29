import styled from 'styled-components';

const Container = styled.footer`
& {
  background-color: white;
  width: 100%;
  height: 18px;
  color: #44274C;
  display: flex;
  justify-content: center;
  align-items: center;
}
span {
  font-weight: 700;
}
img {
  margin-left: 10px;
}
@media (max-width: 450px) {
  p, span {
    font-size: 15px;
  }
}
`;

export default Container;

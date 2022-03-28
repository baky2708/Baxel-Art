import styled from 'styled-components';

const Container = styled.div`
& {
  background-color: ${({ selected }) => (selected === 'pencil' ? '#2196F3' : 'white')};
  width: 90px;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
}

img {
  width: 80%;
  height: 80%;
}
  @media (max-width: 650px) {
    width: 30px;
    height: 30px;
  }
`;

export default Container;

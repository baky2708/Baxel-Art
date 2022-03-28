import styled from 'styled-components';

const Container = styled.div`
  width: 130px;
  background-color: #111;

  @media (max-width: 650px) {
    width: 50px;
  }
`;

export default Container;

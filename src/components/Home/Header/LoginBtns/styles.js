import styled from 'styled-components';

const Container = styled.div`
  width: 400px;
  display:flex;
  justify-content: space-between;
  padding: 0 20px;

  

  @media (max-width: 1024px) {
    width: 370px;

    button {
      font-size: 16px;
    }
  }

  @media (max-width: 768px) {
    & {
      display: none;
    }
  }
`;

export default Container;

import styled from 'styled-components';

const Container = styled.button`
  & {
    width: 174px;
    background-color: ${(props) => props.color || '#4c4499'};
    color: white;
    border-radius: 5px;
    font-weight: 700;
    padding: 2px 0;
    font-size: 22px;
    transition: background-color 400ms;
  }

  &:hover {
    background-color: ${(props) => props.hover || '#6554c0'}
  }

  @media (max-width: 600px) {
    width: 120px;
    font-size: 20px;
  }
`;

export default Container;

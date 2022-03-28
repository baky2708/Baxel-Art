import styled from 'styled-components';

const Container = styled.div`
/* background-color: #2196F3; */
background-color: ${({ selected }) => (selected === 'erase' ? '#2196F3' : 'white')};
width: 90px;
height: 90px;
display: flex;
justify-content: center;
align-items: center;
margin: 10px;

img {
  width: 80%;
  height: 80%;
}
`;

export default Container;

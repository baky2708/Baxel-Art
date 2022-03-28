import styled from 'styled-components';

export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 20%;
height: 40%;
padding: 20px;
border: 0;
border-radius: 40px;
background-color: #C8C8C8;

img {
  cursor:pointer;
}

@media (max-width: 768px) {
  width: 35%;
}

@media (max-width: 700px) {
  width: auto;
}
`;

export const Input = styled.input`
width: 100%;
height: 40px;
border: 0;
background-color: #C8C8C8;
color: rgb(80,80,80);

&:focus {
  outline: none;
}

&::placeholder {
  font-size: 16px;
  padding-left: 10px;
  vertical-align: center;
}

@media (max-width: 700px) {
  & {
    display: none;
  }
}

`;

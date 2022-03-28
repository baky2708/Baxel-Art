import styled from 'styled-components';

const Container = styled.div`
/* background-color: #2196F3; */
margin-top: 80px;
background-color: #444;
color: white;
width: 100%;
height: 120px;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
h1 {
  font-size: 14px;
  margin-bottom: 6px;
}

p {
  font-size: 12px;
  margin-bottom: 4px;
}

span {
  font-weight: 700;
}


  @media (max-width: 650px) {
    visibility: hidden;
  }
`;

export default Container;

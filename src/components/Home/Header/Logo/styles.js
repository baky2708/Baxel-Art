import styled from 'styled-components';

const Container = styled.div`
display: flex;
align-items: center;
width: 135px;

  p {
    width: 24px;
    height: 24px;
    color: white;
    background: #FF0000;
    background: -moz-linear-gradient(-45deg, #FF0000 0%, #FF7979 22%, #FF0000 100%);
    background: -webkit-linear-gradient(-45deg, #FF0000 0%, #FF7979 22%, #FF0000 100%);
    background: linear-gradient(135deg, #FF0000 0%, #FF7979 22%, #FF0000 100%);
    border-radius: 50%;
    text-align: center;
    font-size: 20px;
  margin-right: 5px;
  }

span {
  font-size: 20px;
}
`;

export default Container;

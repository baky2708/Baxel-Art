import styled from 'styled-components';

const btnStartDesign = `
  background: linear-gradient(90deg ,#2d9bea,#8d2ee4);
`;

const btnLoginDesign = `
  background: linear-gradient(44deg,#ff096e,#ff575f,#ff7e4e,#fd9f36)!important;
`;

const Container = styled.button`
   & {
    width: 45%;
    height: 38px;
    border: 0;
    border-radius: 50px;
    font-size: 18px;
    color: white;
    display: flex;
    align-items: center;
    padding: 2px 15px;
    justifi-content: center;
    cursor: pointer;
  }

  &:hover {
    opacity: 0.8;
    transform: translateY(-2px);
    transition-duration: 400ms;
  }

${(props) => {
    switch (props.type) {
      case 'startDraw': return btnStartDesign;
      case 'loginAccount': return btnLoginDesign;
      default: return '';
    }
  }}

  img {
    margin: 10px;
    width: 18px;
    height: 18px;
  }

  p {
   margin: 0 auto;
   padding-right: 5px;
 }
`;
export default Container;

import styled from 'styled-components';

export const Container = styled.div`
& {
  background-color: #444;
  /* background-color: red; */
  width: 90px;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 4px;

}
  @media (max-width: 650px) {
    width: 40px;
    height: 110px;
  flex-direction: column;
  /* justify-content: start; */
  /* align-items: start; */
  }
`;

export const PrimaryColor = styled.div`
& {
  width: 50px;
  height: 50px;
  background-color: ${({ color }) => color || 'black'};
  margin-bottom: 30px;
  margin-right: 30px;
  position: absolute;
  border: 1px solid white;
  ${({ menu }) => (menu
    ? 'visibility: visible;'
    : 'visibility: hidden;')};
  }

  @media (max-width: 650px) {
    width: 30px;
    height: 30px;
  margin: 0;
  position: static;
  margin-bottom: 5px;
  }
`;

export const SecoundColor = styled.div`
& {
  width: 50px;
  height: 50px;
  background-color: ${({ color }) => color || 'white'};
  margin-left: 30px;
  margin-top: 30px;
  }

  @media (max-width: 650px) {
    width: 30px;
    height: 30px;
    margin: 0;
  }
`;

export const Default = styled.div`
& {
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  margin-left: 60px;
  position: absolute;
  cursor: pointer;
}

@media (max-width: 650px) {
  height: 20px;
  position: static;
  margin: 0;
  margin-top: 10px;
  margin-left: 6px;
}
`;
export const DefaultBlack = styled.div`
& {
  width: 10px;
  height: 10px;
  background-color: black;
  position: absolute;
  margin-bottom: 15px;
  margin-right: 15px;
  position: absolute;
  border: 1px solid white;
  ${({ menu }) => (menu
    ? 'visibility: visible;'
    : 'visibility: hidden;')};
}
`;
export const DefaultWhite = styled.div`
& {
  width: 10px;
  height: 10px;
  background-color: white;
}
`;

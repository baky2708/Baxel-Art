import styled from 'styled-components';

export const Container = styled.div`
& {
  background-color: #444;
  width: 90px;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px

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
`;

export const SecoundColor = styled.div`
& {
  width: 50px;
  height: 50px;
  background-color: ${({ color }) => color || 'white'};
  margin-left: 30px;
  margin-top: 30px;
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

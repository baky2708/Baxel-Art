import styled from 'styled-components';

export const Container = styled.main`
& {
  background-color: #444;
  /* background-color: red; */
  color: white;
  display: flex;
  flex-direction: column;
}
h1 {
  margin-top: 10px;
  font-size: 30px;
  align-self: center;
}
`;

export const ImageContainer = styled.div`
& {
  display: flex;
  justify-content: center;
}
`;

export const Image = styled.div`
& {
  color: white;
  text-align: center;
  margin: 10px;
  margin-top: 50px;
  width: 400px;
  height: 300px;
}
p {
  margin-bottom: 10px;
  font-size: 22px;
}


a {
  cursor: pointer;
  border-radius: 6px;
  font-weight: 700;
  font-size: 28px;
}

a:hover {
  background-color: #444;
  color: #DDD;
}
img {
  margin-top: 10px;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  margin-bottom: 20px;
}
button {
  width: auto;
  margin: 0 auto;
}
`;

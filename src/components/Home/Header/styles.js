import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const Logo = styled(Link)`
  & {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 22px;
    color: #4CAF50;
    margin-right: 100px;
  }

  img {
    width: 35px;
    height: 35px;
    margin-right: 10px;
  }
`;

export const SocialMedia = styled.div`
  img {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
`;

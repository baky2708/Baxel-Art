import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {
  Container,
  Main,
  Icons,
  IconsContainer,
} from './styles';
import sadImage from '../../assets/sad.png';
import iconGithub from '../../assets/icons/icon-github.svg';
import iconLinkedin from '../../assets/icons/icon-linkedin.svg';

function Home() {
  return (
    <Container>
      <Header />
      <Main>
        <h1>Sorry!</h1>
        <p>The login page and SearchBar is merely ilustrative...</p>
        <p>But you have more time for create your art!</p>
        <img src={sadImage} alt="sad-img" />
        <p>
          If you want see more of my jobs, check my
          <span> gitHub </span>
          and
          <span> linkedin </span>
          !
        </p>
        <IconsContainer>
          <Icons
            href="https://github.com/baky2708"
            target="_blank"
            rel="noreferrer"
          >
            <img src={iconGithub} alt="github" />
          </Icons>
          <Icons
            href="https://www.linkedin.com/in/flavio-baky-isaque/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={iconLinkedin} alt="github" />
          </Icons>
        </IconsContainer>
      </Main>
      <Footer />
    </Container>
  );
}

export default Home;

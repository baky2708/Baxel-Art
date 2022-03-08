import React from 'react';
import {
  Container,
  Logo,
  SocialMedia,
} from './styles';
import logo from '../../../assets/logo.png';
import iconGit from '../../../assets/icon-git.svg';
import iconLinkedin from '../../../assets/icon-linkedin.svg';

function Header() {
  return (
    <Container>
      <Logo>
        <img src={logo} alt="logo" />
        Baxel Art
      </Logo>
      <SocialMedia
        href="https://github.com/baky2708"
        target="_blank"
      >
        <a
          href="https://github.com/baky2708"
          target="_blank"
          rel="noreferrer"
        >
          <img src={iconGit} alt="icon-git" />
        </a>
        <a
          href="https://linkedin.com/in/flavio-baky-isaque"
          target="_blank"
          rel="noreferrer"
        >
          <img src={iconLinkedin} alt="icon-linkedin" />
        </a>
      </SocialMedia>
    </Container>
  );
}

export default Header;

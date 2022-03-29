import React from 'react';
import Container from './styles';
import iconGithub from '../../assets/icons/icon-github.svg';
import iconLinkedin from '../../assets/icons/icon-linkedin.svg';

function Footer() {
  return (
    <Container>
      <p>
        Website created by
        <span> Flavio Baky Isaque</span>
      </p>
      <a
        href="https://github.com/baky2708"
        target="_blank"
        rel="noreferrer"
      >
        <img src={iconGithub} alt="github" />
      </a>
      <a
        href="https://www.linkedin.com/in/flavio-baky-isaque/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={iconLinkedin} alt="github" />
      </a>
    </Container>
  );
}

export default Footer;

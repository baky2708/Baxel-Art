import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {
  Container,
  Main,
  Section,
  AboutProjectSection,
} from './styles';

function About() {
  return (
    <>
      <Header />
      <Container>
        <Main>
          <Section id="intro">
            <h1>Hello, I&apos;m Baky!</h1>
          </Section>
          <Section id="about-me">
            <p>I&apos;m a student as web develoment.</p>
            <p>
              I&apos;m Brazilian and no,
              I&apos;m dont know how to dance samba or play football!
            </p>
            <p>
              But I like to
              <span> Vim </span>
              (I love vim), play
              <span> retro games </span>
              ,
              <span> Linux systems </span>
              and all about the
              <span> world of programming</span>
              .
            </p>
            <p> </p>
            <p>
              This website is inspired by:&nbsp;
              <a
                href="https://www.pixilart.com/"
                target="_blank"
                rel="noreferrer"
              >
                <span>
                  https://www.pixilart.com/&nbsp;
                </span>
                .
              </a>
              &nbsp;Check him!
            </p>
          </Section>
          <AboutProjectSection>
            <Section>
              <h2>Tecnologies</h2>
              <ul>
                <li>1) React Hooks</li>
                <li>2) Styled Components</li>
                <li>3) Context API</li>
                <li>4) React Router DOM</li>
                <li>5) React Component Export Image</li>
                <li>6) Eslint AirBnB</li>
                <li>7) Netlify</li>
                <li><span>8) (and Obviously) Nvim v0.7.0</span></li>
              </ul>
            </Section>
            <Section>
              <h2>Learning</h2>
              <ul>
                <li>1) Use Styled Components</li>
                <li>2) Structure folder/file of React project</li>
                <li>3) Landing Page desiner</li>
                <li>4) UI/UX</li>
                <li>5) Deploy a project (for free...)</li>
              </ul>
            </Section>
            <Section>
              <h2>Conclusion</h2>
              <ul>
                <li>1) Eslint and structure of forders/files are essential</li>
                <li>2) Tests are SUPER essential (I dont use and I did poorly...)</li>
                <li>3) Thinking about how to draw by clicking and dragging with</li>
                <li>the right mouse button was the most challenging for me</li>
                <li><span>4) Make tests...</span></li>
                <li><span>5) Make tests...</span></li>
                <li><span>6) And make tests</span></li>
              </ul>
            </Section>
          </AboutProjectSection>
        </Main>
        <Footer />
      </Container>
    </>
  );
}

export default About;

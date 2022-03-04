/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      background: transparent;
      outline: 0;

      &:after {
        top: 15px;
        left: 15px;
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = [
    'Python',
    'React',
    'TypeScript',
    'JavaScript(ES6)',
    'PostgreSQL',
    'Flask',
    'HTML and CSS',
  ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              Hello! My name is Aghilan and I enjoy creating things that live on the internet. My
              interest in web development started at the end of 2021 when I was stuck quarantining
              in my room after I got COVID, when I decided to try building a Flask CRUD application.
              I didn't think it would be too hard.
            </p>

            <p>
              I was wrong, I struggled immensely and often felt overwhelmed by the number of moving
              parts in the back-end of my web application. I struggled with implementing common
              features such as password encryption which is made very easy with Flask modules. There
              are many processes that I as a user never think about, building this application
              allowed me to experience a sense of awe for these large projects but also share the
              satisfaction and frustration involved in the process of buidling and deploying a site.
            </p>

            <p>
              Although programming is my predominant hobby, I also enjoy learning about Physics on
              the super small, and super massive scales. I enjoy learning about philsophy and
              different schools of thought's on how life should be lived. Ironically, I never ponder
              on the meaning of life is or how to be a good person, I've learned there is less value
              in thinking about these questions and more so in doing. I am deeply interested in
              Stoicism and it's teachings, it particular the meditations of{' '}
              <a href="https://www.amazon.ca/Meditations-New-Translation-Marcus-Aurelius/dp/0812968255/ref=sr_1_1?crid=2QJ1RBODP1RPJ&keywords=Meditations&qid=1641329621&sprefix=meditations%2Caps%2C139&sr=8-1">
                Marcus Aurelius
              </a>{' '}
              and how I can learn to be{' '}
              <span style={{ fontStyle: 'italic' }}>
                "indifferent to what makes no difference."
              </span>
            </p>

            <p>Here are a few technologies I’ve been exploring recently:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.jpg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;

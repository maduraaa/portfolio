import React from 'react'
import styled, { keyframes } from 'styled-components';
import Responsive from '../tools/Responsive';
import Colors from '../tools/Colors';
import Fonts from '../tools/Fonts';

import { Link } from 'react-router-dom';

// icons
import { FaFacebookSquare, FaInstagramSquare, FaGithubSquare } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';
import { Container } from '../tools/GlobalStyle';

// gif
import CatWalk from '../gif/walk-cat.gif';

const Footer = () => {
  return (
    <Container>
      <FooterWrapper>
        <WalkGif src={CatWalk} alt="cat-walk" />
        <SocialWrapper>
          <SocialLink href='https://www.facebook.com/madurashvili/' target='_blank'><FaFacebookSquare /></SocialLink>
          <SocialLink href='https://www.instagram.com/levan.madurashvili/' target='_blank'><FaInstagramSquare /></SocialLink>
          <SocialLink href='https://www.linkedin.com/in/levan-madurashvili-6aab961a0/' target='_blank'><BsLinkedin /></SocialLink>
          <SocialLink href='https://github.com/maduraaa' target='_blank'><FaGithubSquare /></SocialLink>
        </SocialWrapper>
        <CopyRight>Copyright © 2022</CopyRight>
      </FooterWrapper>
    </Container>
  )
}

const Walk = keyframes`
  from {
    left: 0;
  }
  to {
    left: 93%;
  }
`
const FooterWrapper = styled.footer`
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  -webkit-box-shadow: 0px -1px 3px 0px rgba(255,194,92,1);
  -moz-box-shadow: 0px -1px 3px 0px rgba(255,194,92,1);
  box-shadow: 0px -1px 3px 0px rgba(255,194,92,1);
  padding: 0px 10px 0px 5px;
  position: relative;
    ${Responsive.mobile} {
      display: none;
    }
`;
const SocialWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const SocialLink = styled.a`
  color: ${Colors.Koromiko};
  padding: 5px;
  margin: 5px;
    svg {
      height: 20px;
      fill: ${Colors.Koromiko};
      transition: all 200ms;
    }
    &:hover {
      svg {
        transform: scale(1.5);
        transition: all 200ms;
      }
    }
`;
const CopyRight = styled.div`
  font-size: 15px;
  font-family: ${Fonts.Roboto};
  color: ${Colors.Koromiko};
  user-select: none;
  pointer-events: none;
`;
const WalkGif = styled.img`
  height: 50px;
  opacity: 0.3;
  position: absolute;
  top: -45px;
  z-index: 2;
  animation: ${Walk} 90s infinite linear;
`;

export default Footer
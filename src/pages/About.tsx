import React from 'react'
import styled from 'styled-components';
import Responsive from '../tools/Responsive';


const About = () => {
  return (
    <AboutdWrapper>About</AboutdWrapper>
  )
}


const AboutdWrapper = styled.div`
  min-height: calc(100vh - 180px);
  display: flex;
  justify-content: center;
  align-items: center;
    ${Responsive.mobile} {
      height: auto;
      padding-top: 20px;
    }
`;

export default About
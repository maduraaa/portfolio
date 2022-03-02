import React from 'react'
import styled from 'styled-components';
import ProjectCard from '../components/ProjectCard';
import Responsive from '../tools/Responsive';
import { Container } from '../tools/GlobalStyle';

// project images
import firstProjectImg from "../img/first-project.png"
import smartWatchImg from "../img/smart-watch-min.png"
import mogoImg from "../img/mogo-min.png"
import movie from "../img/movie-min.png"
import mattress from "../img/mattress-min.png"


const Projects = () => {
  return (
    <Container>
      <ProjectdWrapper>
        <Content>
          <ProjectCard backgroudImage={firstProjectImg} link='https://maduraaa.github.io/mark/' title='Mark' linkTitle="WEB" />
          <ProjectCard backgroudImage={smartWatchImg} link='https://maduraaa.github.io/mark/' title='Smart Watch' linkTitle="WEB" />
          <ProjectCard backgroudImage={mogoImg} link='https://maduraaa.github.io/my/mogo.html' title='Mogo' linkTitle="WEB" />
          <ProjectCard backgroudImage={movie} link='https://madura-movie.netlify.app/' title='Movie API' linkTitle="WEB" />
          <ProjectCard backgroudImage={mattress} link='https://madura-mattress.netlify.app/main' title='Mattress' linkTitle="WEB" />
        </Content>
      </ProjectdWrapper>
    </Container>
  )
}

const ProjectdWrapper = styled.div`
  min-height: calc(100vh - 180px);
  width: 100%;
  padding-top: 50px;
  padding-bottom: 100px;
    ${Responsive.mobile} {
      height: auto;
      padding-top: 20px;
    }
`;
const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); /* see notes below */
    grid-row-gap: 25px;
    grid-column-gap: 20px;
`;


export default Projects
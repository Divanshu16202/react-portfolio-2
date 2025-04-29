import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import CSS file


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  React.useEffect(() => {
    AOS.init();
  }, []);
  
  return (
    <Container id="projects" data-aos="zoom-in-right" data-aos-duration="1500" >
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          Here are some of the projects I have worked on. I have worked on a variety of projects, including web applications. I have also contributed to open source projects. You can find the source code for most of these projects on my GitHub profile.
        </Desc>
        <ToggleButtonGroup>
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All Projects</ToggleButton>
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category === toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects
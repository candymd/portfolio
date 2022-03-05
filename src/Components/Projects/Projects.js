import ProjectCard from "./ProjectCard/ProjectCard";
import './Projects.css'
import *  as icon from '../../assets/stack-icons/white-stack-icons_variables'
import {useEffect, useRef} from "react";

const Projects = () => {

    const matchup = require('../../assets/projects-images/matchup.png')

    const projects = [
        {
            name: 'Econotravel',
            image: matchup,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            stack: [icon.github, icon.spring, icon.figma, icon.git, icon.javascript, icon.java, icon.react],
            github: '',
            demo: ''
        },
        {
            name: 'MatchUp',
            image: matchup,
            stack: [icon.github, icon.spring, icon.figma, icon.git, icon.javascript, icon.java, icon.react, icon.html],
            github: '',
            demo: ''
        }
            ]


  return (
      <section className="projects section">
          <h1>Projects</h1>
          {projects.map(project => <ProjectCard key={project.name} project={project}/>)}
      </section>
  )
}

export default Projects
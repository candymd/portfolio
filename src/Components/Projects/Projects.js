import ProjectCard from "./ProjectCard/ProjectCard";
import './Projects.css'
import *  as icon from '../../assets/stack-icons/white-stack-icons_variables'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

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
        },
        {
            name: 'MatchUp',
            image: matchup,
            stack: [icon.github, icon.spring, icon.figma, icon.git, icon.javascript, icon.java, icon.react, icon.html],
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


    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 100 },
            items: 1,
        }
    };

  return (
      <section className="projects section">
          <h1>Projects</h1>
          <Carousel responsive={responsive}  infinite={true}
                    autoPlaySpeed={4000}
                    keyBoardControl={true}
                    transitionDuration={600} showThumbs={false}>
              {projects.map(project =>
                  <ProjectCard key={project.name} project={project}/>)}
          </Carousel>
      </section>
  )
}

export default Projects
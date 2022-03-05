import ProjectCard from "./ProjectCard/ProjectCard";
import './Projects.css'
import '../../assets/projects-images/matchup.png'


const Projects = () => {

    const matchup = require('../../assets/projects-images/matchup.png')
    const portfolio = require('../../assets/projects-images/portfolio.png')

    const projects = [
        {
            name: 'Econotravel',
            image: portfolio,
            github: '',
            demo: ''
        },
        {
            name: 'MatchUp',
            image: matchup,
            github: '',
            demo: ''
        }
            ]




  return (
      <section className="projects section">
          <h1>Projects</h1>
          {projects.map(project => <ProjectCard project={project}/>)}
      </section>
  )
}

export default Projects
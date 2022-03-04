const Projects = () => {

    const projects = [
        {
            name: 'Econotravel',
            image: '',
            github: '',
            demo: ''
        },
        {
            name: 'MatchUp',
            image: '',
            github: '',
            demo: ''
        }
            ]




  return (
      <section className="projects">
          {projects.map(project => <p>{project.name}</p>)}
      </section>
  )
}

export default Projects
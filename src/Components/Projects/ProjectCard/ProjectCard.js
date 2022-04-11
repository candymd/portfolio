import './ProjectCard.css'
import {useState} from "react";

const ProjectCard = ({project, matches}) => {

    const [showHoverLayer, setShowHoverLayer] = useState(false);
    

    return (
        <div className="project-card" >
            <div className="project-image" onMouseEnter={() => setShowHoverLayer(true)}
                 onMouseLeave={() => setShowHoverLayer(false)}>
                <img src={project.image} alt={"screenshot of " + project.name + " website"} />
                {showHoverLayer &&
                    <div className="hover-layer">
                        <h1>{project.name}</h1>
                        <br/>
                        <p>Stack used:</p>
                        <div className="stack-icons">{project.stack}</div>
                    </div>
                }
            </div>
            <div className="description-and-btn">
              {!matches && <p>{project.description}</p>} 
                <div className="card-btn">
                    <a target="_blank" rel="noreferrer" href={project.github}><button>Github</button></a>
                    {project.demo && <a target="_blank" rel="noreferrer" href={project.demo}><button>Demo</button></a>}
                </div>
            </div>

        </div>

    )

}

export default ProjectCard
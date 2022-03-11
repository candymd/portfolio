import React from 'react';
import '../ProjectCard/ProjectCard'

const MobileCard = ({project}) => {
    return (
        <div className='mobile-card' >
        <div className="project-image">
            <img src={project.image} alt={"screenshot of " + project.name + " website"} />
        </div>
            <div className="card-btn">
                <div className='stack'>
                 </div>
                <a target="_blank" rel="noreferrer" href={project.github}><button>Github</button></a>
                {project.demo && <a target="_blank" rel="noreferrer" href={project.demo}><button>Demo</button></a>}
        </div>

    </div>
    );
};

export default MobileCard;
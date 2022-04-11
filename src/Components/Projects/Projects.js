import ProjectCard from "./ProjectCard/ProjectCard";
import './Projects.css'
import *  as icon from '../../assets/stack-icons/white-stack-icons_variables'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MobileCard from "./ProjectCard/MobileCard";

const Projects = ({matchesTablet, matchesMobile}) => {

    const matchup = require('../../assets/projects-images/matchup.png')
    const econotravel = require('../../assets/projects-images/econotravel.png')
    const wheelOfDoom = require('../../assets/projects-images/wheel-of-doom.png')
    const femhoot = require('../../assets/projects-images/femhoot.png')
    const musicPlayer = require('../../assets/projects-images/music-player.png')
    const myBookTracker = require('../../assets/projects-images/myBookTracker.png')
    const legacyGames = require('../../assets/projects-images/legacy-games.png')
    const filmCity = require('../../assets/projects-images/filmCity.png')

    const projects = [
        {
            name: 'Econotravel',
            image: econotravel,
            description: 'Econotravel is an eco-friendly travel agency that offers trips and experiences all around Catalonia.',
            stack: [icon.github, icon.spring, icon.figma, icon.git, icon.javascript, icon.java, icon.react, icon.css],
            github: 'https://github.com/candymd/bftp2-econotravel-client',
            demo: ''
        },
        {
            name: 'MatchUp',
            image: matchup,
            description: 'MatchUp is a marketplace where you can find people to give you a \n' +
                'hand with things like moving out or grocery shopping. Winner of \n' +
                'Hackathon F5.',
            stack: [icon.github, icon.spring, icon.git, icon.javascript, icon.java, icon.react, icon.html, icon.css],
            github: 'https://github.com/candymd/match-app-front',
            demo: ''
        },
        {
            name: 'Wheel of Doom',
            image: wheelOfDoom,
            description: 'Wheel of Doom allows you to pick a random name out of a given list without the same name coming up twice until all the names have been chosen.',
            stack: [icon.github, icon.git, icon.javascript, icon.jquery, icon.html, icon.css],
            github: 'https://github.com/candymd/Wheel-of-doom',
            demo: 'https://candymd.github.io/Wheel-of-doom/'
        },
        {
            name: 'Lo-fi music player',
            image: musicPlayer,
            description: 'Simple and minimalist javascript lo-fi themed music player.',
            stack: [icon.github, icon.git, icon.javascript, icon.html, icon.css],
            github: 'https://github.com/candymd/music-player',
            demo: 'https://candymd.github.io/music-player/'
        },
        {
            name: 'FilmCity',
            image: filmCity,
            description: 'Backend for an online videoclub catalog where you can rent and rate movies.',
            stack: [icon.github, icon.git, icon.java, icon.spring],
            github: 'https://github.com/candymd/bftp2-project3-starting-code',
            demo: ''
        },
        {
            name: 'Legacy Games',
            image: legacyGames,
            description: 'Online catalog for a video-game store to view and administrate commodities.',
            stack: [icon.github, icon.git, icon.javascript, icon.html, icon.css, icon.tailwind, icon.spring],
            github: 'https://github.com/candymd/bftp2-project4-grupo1',
            demo: ''
        },
        {
            name: 'MyBookTracker',
            image: myBookTracker,
            description: 'Web app for keeping a track of your books.',
            stack: [icon.github, icon.git, icon.javascript, icon.html, icon.css, icon.bootstrap, icon.spring],
            github: 'https://github.com/candymd/MyBookTracker',
            demo: ''
        },
        {
            name: 'Femhoot-Web',
            image: femhoot,
            description: 'On Femhoot you can take quizzes to learn about women in tech. Third placer winner of Nuwe\'s International Femhack.',
            stack: [icon.github, icon.git, icon.javascript, icon.html, icon.css],
            github: 'https://github.com/candymd/femhoot-web',
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
          <Carousel responsive={responsive} infinite={true} showDots={true}
                    autoPlaySpeed={4000}
                    keyBoardControl={true}
                    transitionDuration={600} showThumbs={false}>
              {projects.map(project => !(matchesTablet || matchesMobile) ? 
                  (<ProjectCard matchesMobile={matchesMobile} matchesTablet={matchesTablet} key={project.name} project={project}/>) :
                   (<MobileCard matchesMobile={matchesMobile} matchesTablet={matchesTablet} key={project.name} project={project}/>))}

          </Carousel>
      </section>
  )
}

export default Projects
import "./Hero.css"
import {github, linkedin, mail} from "../../assets/socialMedia-icons/socialMedia-icons_variables"
import illustration from "../../assets/illustration.svg"


const Hero = () => {

    return (
        <main  className="hero section">
        <div className="intro-text">
            <h1 >
                Hello, I am Candy Montero, a barcelona-based web developer.
            </h1>

            <div className="socialMedia-icons">
                    <a href="https://linkedin.com/in/candymd" target="_blank" rel="noreferrer">
                        <img alt="github icon" src={linkedin}/>
                    </a>
                <a href="https://github.com/candymd" target="_blank" rel="noreferrer">
                    <img alt="linkedin icon" src={github}/>
                </a>
                <a href="mailto:candymdeoleo@gmail.com" target="_blank" rel="noreferrer">
                    <img alt="mail icon" src={mail}/>
                </a>
            </div>
        </div>
            <div className="illustration">
                <img alt="computer, plant and coffee" src={illustration}/>
            </div>
        </main>
    )

}

export default Hero
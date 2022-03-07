import './Footer.css'
import {github, linkedin, mail} from "../../assets/socialMedia-icons/socialMedia-icons_variables";

const Footer = () => {
    return (
        <footer>
            <div className="findMe-icons">
                <h1>Find me on</h1>
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
                <p>Made with ♥ by Candy Montero © 2022</p>
            </div>
        </footer>
    )

}

export default Footer
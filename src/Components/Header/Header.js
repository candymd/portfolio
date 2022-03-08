import "./Header.css"
import {Link} from "react-scroll";
import {useScrollHandler} from '../ScrollHandler'

const Header = () => {

    const scroll = useScrollHandler();

    return (
        <header className={scroll ? "header-active" : "header"}>
            <nav>
                <ul>
                    <li><Link className="link" activeClass="active" to="hero" spy={true} smooth={true} duration={500}>Home</Link></li>
                    <li><Link className="link" activeClass="active" to="skills" spy={true} smooth={true}  duration={500}>Skills</Link></li>
                    <li><Link className="link" activeClass="active" to="projects" spy={true} smooth={true}  duration={500}>Projects</Link></li>
                    <li><Link className="link" activeClass="active" to="contact" spy={true} smooth={true}  duration={500}>Contact</Link></li>
                </ul>
            </nav>
        </header>

    )
}

export default Header
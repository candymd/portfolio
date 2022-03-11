import "./Header.css"
import {Link} from "react-scroll";
import {useScrollHandler} from '../ScrollHandler'

const Header = ({close}) => {

    const scroll = useScrollHandler();

    return (
        <header className={scroll ? "header-active" : "header"}>
            <nav>
                <ul>
                    <li><Link className="link" activeClass="active" to="hero" spy={true} smooth={true} duration={500} onClick={close}>Home</Link></li>
                    <li><Link className="link" activeClass="active" to="aboutMe" offset={-15} spy={true} smooth={true} duration={500} onClick={close}>About</Link></li>
                    <li><Link className="link" activeClass="active" to="skills" offset={-15}  spy={true} smooth={true}  duration={500} onClick={close}>Skills</Link></li>
                    <li><Link className="link" activeClass="active" to="projects" offset={-15} spy={true} smooth={true}  duration={500} onClick={close}>Projects</Link></li>
                    <li><Link className="link" activeClass="active" to="contact" offset={-15} spy={true} smooth={true}  duration={500} onClick={close}>Contact</Link></li>
                </ul>
            </nav>
        </header>

    )
}

export default Header
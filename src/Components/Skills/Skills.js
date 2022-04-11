import * as icon from '../../assets/stack-icons/colored-stack-icons_variables'
import './Skills.css'

const Skills = () => {

    const Skills = [
        {
            image: icon.colored_html ,
            name: 'HTML'
        },
        {
            image: icon.colored_css,
            name: 'CSS'
        },
        {
            image: icon.colored_react,
            name: 'REACT'
        },
        {
            image: icon.colored_javascript,
            name: 'JAVASCRIPT'
        },
        {
            image: icon.colored_java,
            name: 'JAVA'
        },
        {
            image: icon.colored_springBoot,
            name: 'SPRINGBOOT'
        },
        {
            image: icon.colored_tailwind,
            name: 'TAILWIND'
        },
        {
            image: icon.colored_bootstrap,
            name: 'BOOTSTRAP'
        },
        {
            image: icon.colored_git,
            name: 'GIT'
        },
        {
            image: icon.colored_github,
            name: 'GITHUB'
        },
        {
            image: icon.colored_figma,
            name: 'FIGMA'
        },
        {
            image: icon.colored_gradle,
            name: 'GRADLE'
        },
    ]


    return (
        <section className="skills section">
            <h1>Skills</h1>
            <div className="skill-grid">
            {Skills.map(skill =>
                <div className="skill-card" key={skill.name}>
                    {skill.image}
                    <p>{skill.name}</p>
                </div>

            )}
            </div>
        </section>
    )

}

export default Skills
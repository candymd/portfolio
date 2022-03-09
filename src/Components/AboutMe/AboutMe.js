import homeOffice from '../../assets/HomeOffice.svg'
import './AboutMe.css'

const AboutMe = () => {
  return (
      <section className="aboutMe section">
     <h1>About me</h1>
          <div className="description-and-image">
              <p><q>I'd always consider myself a techie and someone who's very passionate about technology.
                  In 2021 I joined FactoriaF5's Femtech 
                  bootcamp where I trained to be become a fullstack developer by making projects using technologies such as ReactJs, Spring, Github and working with agile methodology.
                   <br/><br/>
                  Apart from coding, one of my main interests is social justice. I would love to take part in 
                  projects which focus on things like diversity and inclusion, especially for women in tech.</q></p>
              <img src={homeOffice} alt={homeOffice + 'illustration'} />
          </div>
      </section>
  )
}

export default AboutMe
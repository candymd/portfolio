import homeOffice from '../../assets/HomeOffice.svg'
import './AboutMe.css'

const AboutMe = () => {
  return (
      <section className="aboutMe section">
     <h1>About me</h1>
          <div className="description-and-image">
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. <br/><br/>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                  laborum."</p>
              <img src={homeOffice} alt={homeOffice + 'illustration'} />
          </div>
      </section>
  )
}

export default AboutMe
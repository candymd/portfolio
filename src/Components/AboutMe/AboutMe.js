import homeOffice from "../../assets/HomeOffice.svg";
import "./AboutMe.css";

const AboutMe = ({matches}) => {
  return (
    <section className="aboutMe section">
      <h1>About me</h1>
      <div className="description-and-image">
        <p>
          <q>
            I'd always consider myself a techie and someone who's very
            passionate about technology. In 2021 I joined FactoriaF5's Femtech
            bootcamp where I trained become a fullstack developer by
            making projects using technologies such as ReactJs, Springboot, Github
            and working with agile methodologies.
            <br />
            <br />
            Aside from coding, one of my main interests is social justice. I
            would love to take part in projects focusing on things like
            diversity and inclusion, especially for women in tech.
          </q>
        </p>
        {!matches && <img src={homeOffice} alt={homeOffice + "illustration"} /> }
        </div>
    </section>
  );
};

export default AboutMe;

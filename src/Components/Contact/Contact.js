import './Contact.css'
import {useRef} from "react";
import * as emailjs from "@emailjs/browser";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_a4opov2', 'template_yhku7ml', form.current, 'FxJFbtOtkP3TcNi2c')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };


  return (
      <section className="contact section">
        <h1>Contact me!</h1>
          <form ref={form} onSubmit={sendEmail}>
              <div className="name-and-lastName">
                  <div className="label-input">
                      <label htmlFor="name">Name</label>
                      <input placeholder="Name" type="text" name="name" id="name"/>
                  </div>
                  <div className="label-input">
                      <label htmlFor="lastName">Last name</label>
                      <input placeholder="Last name" type="text" name="lastName" id="lastName"/>
                  </div>
              </div>
              <div className="label-input">
              <label htmlFor="subject">Subject</label>
              <input placeholder="Subject" type="text" name="subject" id="subject"/>
              </div>
              <div className="label-input">
              <label htmlFor="email">Email</label>
              <input placeholder="Your email" type="email" name="email" id="email"/>
              </div>
                <textarea placeholder="Enter your message!" name="message" id="message" maxLength="250" />
              <button type="submit" className="submit-btn" >Send</button>
          </form>
      </section>
  )
}

export default Contact
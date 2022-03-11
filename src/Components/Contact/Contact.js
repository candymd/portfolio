import './Contact.css'
import {useRef, useState} from "react";
import * as emailjs from "@emailjs/browser";

const Contact = () => {
    const form = useRef();
    const [maxLength, setMaxLength] = useState();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_a4opov2', 'template_yhku7ml', form.current, 'FxJFbtOtkP3TcNi2c')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };


    const handleMaxInput = (e) =>  {
          let target =  e.target.value.length.toString();
          setMaxLength(target)
    }


  return (
      <section className="contact section">
        <h1>Contact me!</h1>
          <form ref={form} onSubmit={sendEmail}>
              <div className="name-and-lastName">
                  <div className="label-input">
                      <label htmlFor="name">Name</label>
                      <input placeholder="Name" required type="text" name="name" id="name"/>
                  </div>
                  <div className="label-input">
                      <label htmlFor="lastName">Last name</label>
                      <input placeholder="Last name" required type="text" name="lastName" id="lastName"/>
                  </div>
              </div>
              <div className="label-input">
              <label htmlFor="subject">Subject</label>
              <input placeholder="Subject" required type="text" name="subject" id="subject"/>
              </div>
              <div className="label-input">
              <label htmlFor="email">Email</label>
              <input placeholder="Your email" required type="email" name="email" id="email"/>
              </div>
                <textarea onChange={handleMaxInput} placeholder="Enter your message!" required name="message" id="message" maxLength="250" />
                <p className={maxLength >= 250 ? 'active' : ''}>{maxLength === undefined ? '0': maxLength}/250</p>
              <button type="submit" className="submit-btn" >Send</button>
          </form>
      </section>
  )
}

export default Contact
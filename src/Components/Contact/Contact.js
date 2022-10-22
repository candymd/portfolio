import './Contact.css'
import {useRef, useState} from "react";
import * as emailjs from "@emailjs/browser";


const Contact = () => {
    const form = useRef();
    const [maxLength, setMaxLength] = useState();
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_USER_ID)
            .then((result) => {
                console.log(result.text);
                setSuccessMessage('Thank you for your message. It has been sent successfully');
            }).catch((error) => {
            setErrorMessage('❌ Oops, looks like something went wrong! Please try again later or you can reach out at my other socials.');
            console.log(error.text);

        })
    };


    const handleMaxInput = (e) => {
        const target = e.target.value.length;
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
                <textarea onChange={handleMaxInput} placeholder="Enter your message!" required name="message"
                          id="message" maxLength="250"/>
                <p className={successMessage === '' ? 'error-message' : 'success-message'}>{successMessage === '' ? errorMessage : successMessage}</p>
                <p className={maxLength >= 250 ? 'active' : ''}>{maxLength === undefined ? '0' : maxLength}/250</p>
                <button type="submit" className="submit-btn">Send</button>
            </form>
        </section>
    )
}

export default Contact
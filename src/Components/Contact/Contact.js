import './Contact.css'

const Contact = () => {
  return (
      <section className="contact section">
        <h1>Contact me!</h1>
          <form>
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
                <textarea placeholder="Enter your message!" name="subject" id="subject" maxLength="250" />
              <button type="submit" className="submit-btn" >Send</button>
          </form>
      </section>
  )
}

export default Contact
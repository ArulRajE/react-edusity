import "./Contact.css"
import msg_icon from "../../assets/images/msg-icon.png"
import mail_icon from "../../assets/images/mail-icon.png"
import phone_icon from "../../assets/images/phone-icon.png"
import location_icon from "../../assets/images/location-icon.png"
import white_arrow from "../../assets/images/white-arrow.png"
import { useState } from "react"

const Contact = () => {
  const [result, setResult] = useState("")

  const onSubmit = async (event) => {
    event.preventDefault()
    setResult("Sending....")
    const formData = new FormData(event.target)

    formData.append("access_key", "856dbbe1-0cad-49a0-aa94-4277186785d2")

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    })

    const data = await response.json()

    if (data.success) {
      setResult("Form Submitted Successfully")
      event.target.reset()
    } else {
      console.log("Error", data)
      setResult(data.message)
    }
  }
  return (
    <div className="contact" id="contact">
      <div className="contact-col">
        <h3>
          Send us a message <img src={msg_icon} alt="" />
        </h3>
        <p>
          Feel free to reach out through contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service to our
          university community.
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="" />
            Contact@GreatStack.dev
          </li>
        </ul>
        <ul>
          <li>
            <img src={phone_icon} alt="" />
            +1 123-456-7890
          </li>
        </ul>
        <ul>
          <li>
            <img src={location_icon} alt="" />
            77 Massachusetts Ave, Cambridge MA 02139, United States
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
            required
          />
          <label htmlFor="phone">Phone Number</label>
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="Enter your mobile"
          />
          <label htmlFor="email">Your Email</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Enter your email id"
          />
          <label htmlFor="message">Write your messages here</label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="6"
            placeholder="Enter your message"
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            Submit Now <img src={white_arrow} alt="" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact

import "./Hero.css"
import right_arrow from "../../assets/images/dark-arrow.png"

const Hero = () => {
  return (
    <div className="hero container" id="hero">
      <div className="hero-text">
        <h1>We Ensure better education for a better world</h1>
        <p>
          Our cutting-edge curriculum is designed to empower students with the
          knowledge, skills, and experiences needed to excel in the dynamic
          field of education
        </p>
        <button className="btn">
          Explore more
          <img src={right_arrow} alt="right-arrow" />
        </button>
      </div>
    </div>
  )
}

export default Hero

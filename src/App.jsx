import Campus from "./components/Campus/Campus"
import About from "./components/About/About"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import Programs from "./components/Programs/Programs"
import Title from "./components/Title/Title"
import Testimonials from "./components/Testimonials/Testimonials"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
import VideoPlayer from "./components/VideoPlayer/VideoPlayer"
import { useState } from "react"

const App = () => {
  const [playState, setPlayState] = useState(false)
  return (
    <>
      <Navbar />
      <Hero />
      <div className="container">
        <Title title="What We Offer" subTitle="Our PROGRAM" />
        <Programs />
        <Title title="What We Offer" subTitle="Our PROGRAM" />
        <About setPlayState={setPlayState} />
        <Title title="Gallery" subTitle="Campus Photos" />
        <Campus />
        <Title title="TESTIMONIALS" subTitle="What Student Says" />
        <Testimonials />
        <Title title="CONTACT US" subTitle="Get in Touch" />
        <Contact />
        <Footer />
        <VideoPlayer playState={playState} setPlayState={setPlayState} />
      </div>
    </>
  )
}

export default App

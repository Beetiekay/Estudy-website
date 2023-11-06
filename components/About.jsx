import { BsCast } from "react-icons/bs";
import "../components/About.css";

const About = () => {
    return (
      <>
      <div className="about-content" id="About">
        <div className="About-icon"><BsCast/></div>

        <div className="left-text">
          <h3>About <span>Us</span></h3>
        <p>“Your Knowledge is the center of your digital eco-system, like a brick and mortar location, the experience matters once a customer enters, just as much as the perception they have of you before they walk through the door.”</p>
        <button className="About-btn">Contact Us</button>
        </div>
      </div>
      </>
    )
  };


export default About;
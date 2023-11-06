import "../components/Home.css";
import {BsChatLeftDotsFill} from 'react-icons/bs';

const Home = () => {
    return (
      <>
  <div className="main-home" id="Home">
     <div className="home-text">
        <h2>Knowledge With</h2>
        <span>Estudy</span>

        <p>
          Estudy is your gateway to a world of limitless learning
          possibilies. With our cutting-edge eLearning platform, you can
          Explore a vast Library of courses, From academic subject to practical
          Skills, all designed to help you achieve your goals.
        </p>

        <button className="home-btn">Contact Us</button>

      </div>

      <div className="home-icon"><BsChatLeftDotsFill/></div>

   </div>
      </>
    )
  };


export default Home;

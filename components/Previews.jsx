import "../components/Previews.css";
import image from "../src/assets/images/alvarez.png";
import image1 from "../src/assets/images/dybala.png";
import image2 from "../src/assets/images/ronaldo.webp";


const Previews = () => {
    return (
      <>
      <div className="Previews">

        <h2>Our <span>Reviews</span></h2>

      <div className="Previews-container">

       <div className="reviews-box">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, repellat commodi earum reprehenderit delectus culpa tempora. Vero iste dolorem rerum consectetur! Nihil eveniet quis, magni possimus aspernatur eos porro. Harum?</p>

        <div className="img"><img src={image}/></div>
       </div>
         
       <div className="reviews-box">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, repellat commodi earum reprehenderit delectus culpa tempora. Vero iste dolorem rerum consectetur! Nihil eveniet quis, magni possimus aspernatur eos porro. Harum?</p>

        <div className="im"><img src={image1}/></div>
       </div>

       <div className="reviews-box" id="previews">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, repellat commodi earum reprehenderit delectus culpa tempora. Vero iste dolorem rerum consectetur! Nihil eveniet quis, magni possimus aspernatur eos porro. Harum?</p>

        <div className="img"><img src={image2}/></div>
       </div>

      </div>
      
      </div>
      </>
    )
  };


export default Previews;
import { AiFillAccountBook } from "react-icons/ai";
import "../components/Contact.css";


const Contact = () => {
    return (
      <>
  <div className="contact-content" id="contact">
  <h2>Contact <span> Us</span></h2>

  <div className="form-container">
  
      <form action="#">

      <div className="name">
        <p>Your Name</p>
        <input type="name" placeholder="  enter your name" required></input>
      </div>
      
      <div className="email">
        <p>Your email</p>
        <input type="email" placeholder="  enter your email" required></input>
      </div>
       
      <div className="number">
        <p>Your Number</p>
        <input type="email" placeholder="  enter your number" required></input>
      </div>
        
      <button type="message" className="contact-btn">Send message</button>

      </form>
      
      <div className="side-img">
        <AiFillAccountBook/>
      </div>
    </div>
  </div>
      </>
    )
  };


export default Contact;
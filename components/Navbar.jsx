import "../components/Navbar.css";
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';

const Navbar = () => {
    return (
      <>

   <div className="nav-bar">

      <div className="logo-header"><h2><span>E</span>study</h2>
      </div>
      <input type="checkbox" id="check"></input>

      <span className="menu">
          <a href="Home">Home</a>
          <a href="About">About</a>
          <a href="Courses">Courses</a>
          <a href="previews">Reviews</a>
          <a href="contact">Contact</a>
        <label For="check" className="close-menu"><AiOutlineClose/></label>
      </span>
        <label For="check" className="open-menu"><AiOutlineMenu/></label>
    </div>
      </>
    )
  };


export default Navbar;

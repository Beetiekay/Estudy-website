import { AiFillAccountBook, AiFillAlert, AiFillAlipayCircle, AiFillAndroid, AiFillApi} from "react-icons/ai";
import "../components/Courses.css";

const Courses = () => {
    return (
      <>
     <div className="courses" id="Courses">
        <h3><span>Our </span>Courses</h3>

        <div className="courses-container">

            <div className="courses-box">
               <div className="bt"><AiFillAlert/></div> 
                <h2>Web Development</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adepisicingelit thus is web</p>
            </div>

            <div className="courses-box">
               <div className="bt"><AiFillApi/></div> 
               <h2>App Development</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adepisicingelit thus is web</p>
            </div>

            <div className="courses-box">
              <div className="bt"><AiFillAlipayCircle/></div> 
              <h2>Graphic Designer</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adepisicingelit thus is web</p>
            </div>

            <div className="courses-box">
            <div className="bt"> <AiFillAndroid/></div> 
            <h2>Digital Marketing</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adepisicingelit thus is web</p>
            </div>

        </div>

     </div>
      </>
    )
  };


export default Courses;
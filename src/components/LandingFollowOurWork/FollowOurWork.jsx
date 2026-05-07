import "./FollowOurWork.css";
import { NavLink } from "react-router-dom";
import { TbArrowNarrowRight } from "react-icons/tb";
import img1 from "../../assets/images/landing-follow-our-work/1.jpg";
import img2 from "../../assets/images/landing-follow-our-work/2.jpg";
import img3 from "../../assets/images/landing-follow-our-work/3.jpg";
import img4 from "../../assets/images/landing-follow-our-work/4.jpg";
import img5 from "../../assets/images/landing-follow-our-work/5.jpg";
import img6 from "../../assets/images/landing-follow-our-work/6.jpg";

function FollowOurWork() {
  return (
    <div className="follow-our-work-container">
      <div className="top">
        <span></span>
        <h4>Follow our work</h4>
      </div>
      <div className="middle">
        <h1>@noir.freiburg</h1>
        <NavLink to="/#">
          <p>
            Follow on instagram <TbArrowNarrowRight className="arrow" />
          </p>
        </NavLink>
      </div>
      <div className="bottom">
        <div className="box">
            <img src={img1} alt="Work 1" />
        </div>
        <div className="box">
            <img src={img2} alt="Work 2" />
        </div>
        <div className="box">
            <img src={img3} alt="Work 3" />
        </div>
        <div className="box">
            <img src={img4} alt="Work 4" />
        </div>
        <div className="box">
            <img src={img5} alt="Work 5" />
        </div>
        <div className="box">
            <img src={img6} alt="Work 6" />
        </div>
      </div>
    </div>
  )
}

export default FollowOurWork

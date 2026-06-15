import "./FollowOurWork.css";
import { NavLink } from "react-router-dom";
import { TbArrowNarrowRight } from "react-icons/tb";

function FollowOurWork() {
  return (
    <div className="follow-our-work-container">
      <div className="top">
        <span></span>
        <h4>folgen sie uns</h4>
      </div>
      <div className="middle">
        <h1>@melisadede.hair</h1>
        <NavLink to="/#">
          <p>
            Auf Instagram folgen <TbArrowNarrowRight className="arrow" />
          </p>
        </NavLink>
      </div>
      <div className="bottom">
        <div className="box">
          <img src="/gallery/place-1.jpeg" alt="Arbeit 1" />
        </div>
        <div className="box">
          <img src="/gallery/place-2.jpeg" alt="Arbeit 2" />
        </div>
        <div className="box">
          <img src="/gallery/style-1.jpeg" alt="Arbeit 3" />
        </div>
        <div className="box">
          <img src="/gallery/style-2.jpeg" alt="Arbeit 4" />
        </div>
        <div className="box">
          <img src="/gallery/style-3.jpeg" alt="Arbeit 5" />
        </div>
        <div className="box">
          <img src="/gallery/place-4.jpeg" alt="Arbeit 6" />
        </div>
      </div>
    </div>
  );
}

export default FollowOurWork;
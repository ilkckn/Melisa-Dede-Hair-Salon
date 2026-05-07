import { NavLink } from "react-router-dom";
import "./OurTeam.css";
import our_team_data from "./OurTeamData.js";
import { TbArrowNarrowRight } from "react-icons/tb";

function OurTeam() {
  return (
    <div className="our-team-container">
      <div className="top">
        <span></span>
        <h4>meet the artists</h4>
      </div>
      <div className="middle">
        <h1>Our Team</h1>
        <NavLink to="/team">
          <p>
            All Team <TbArrowNarrowRight className="arrow" />
          </p>
        </NavLink>
      </div>
      <div className="bottom">
        {our_team_data.slice(0, 4).map((member) => (
          <div className="team-member" key={member.id}>
            <div className="team-img">
              <img src={member.image} alt={member.name} />
            </div>
            <div className="team-info">
              <h2>{member.name}</h2>
              <h3>{member.position}</h3>
              <p>{member.bio}</p>
              <span>{member.experience} years of experience</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurTeam;

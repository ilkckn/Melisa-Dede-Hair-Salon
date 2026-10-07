import "./Team.css";
import { useNavigate } from "react-router-dom";
import MyStory from "./MyStory";
import SkillSet from "./SkillSet";

function Team() {
  const navigate = useNavigate();
  
  return (
    <section className="team-container">
      <div className="hero">
        <div className="team-hero-left">
          <img src="/dresser/personal.jpeg" alt="" />
        </div>
        <div className="team-hero-right">
          <span>Lernen Sie den Künstler kennen</span>
          <h1>Melisa Dede</h1>
          <p>
            "Ich glaube an Schönheit, die sich mühelos anfühlt, und an Haar, das
            eine Geschichte von stiller Raffinesse erzählt."
          </p>
          <button onClick={() => navigate("/appointment")}>Vereinbaren Sie Ihren Termin.</button>
        </div>
      </div>

      <div className="my-story-component">
        <MyStory />
      </div>
      <div className="skill-set-component">
        <SkillSet />
      </div>
    </section>
  );
}

export default Team;

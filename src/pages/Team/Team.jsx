import "./Team.css";
import { useNavigate } from "react-router-dom";
import TeamMembers from "./TeamMembers";
import MyStory from "./MyStory";
import SkillSet from "./SkillSet";

// ⚠️ DEMO-INHALT: Foto und Texte sind Platzhalter.
const HERO_IMAGE =
  "https://images.unsplash.com/photo-1704311183024-5600be2a1a7e?auto=format&fit=crop&w=800&q=80";

function Team() {
  const navigate = useNavigate();

  return (
    <section className="team-container">
      <div className="hero">
        <div className="team-hero-left">
          <img src={HERO_IMAGE} alt="Das Team von Blanche" />
        </div>
        <div className="team-hero-right">
          <span>Lernen Sie unser Team kennen</span>
          <h1>Das Team von Blanche</h1>
          <p>
            "Wir glauben an Schönheit, die sich mühelos anfühlt, und an Haar,
            das eine Geschichte von stiller Raffinesse erzählt."
          </p>
          <button onClick={() => navigate("/appointment")}>
            Termin vereinbaren
          </button>
        </div>
      </div>

      <div className="team-members-component">
        <TeamMembers />
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
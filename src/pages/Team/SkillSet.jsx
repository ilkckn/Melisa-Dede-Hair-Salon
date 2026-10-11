import "./SkillSet.css";
import { IoColorPaletteOutline } from "react-icons/io5";
import { FiScissors } from "react-icons/fi";
import { PiFlowerLotusLight } from "react-icons/pi";

const SkillSet = () => {
  return (
    <section className="skill-set-container">
      <div className="header">
        <p>unsere Stärken</p>
        <h1>das Kompetenzprofil</h1>
      </div>
      <div className="skills">
        <div className="skill">
          <IoColorPaletteOutline />
          <h2>Farbe &amp; Balayage</h2>
          <p>
            Von sanften Balayage-Verläufen bis zu nuancenreichen Blondtönen:
            natürlich, strahlend und individuell auf Sie abgestimmt.
          </p>
        </div>
        <div className="skill">
          <FiScissors />
          <h2>Präzisionsschnitt</h2>
          <p>
            Schnitte, die die natürliche Textur respektieren, gut fallen und
            auch nach Wochen noch in Form bleiben.
          </p>
        </div>
        <div className="skill">
          <PiFlowerLotusLight />
          <h2>Kopfhaut-Wellness</h2>
          <p>
            Wohltuende Kopfhautmassagen und maßgeschneiderte
            Pflegebehandlungen für gesundes Haar von der Wurzel an.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SkillSet;
import "./SkillSet.css";
import { IoColorPaletteOutline } from "react-icons/io5";
import { FiScissors } from "react-icons/fi";
import { PiFlowerLotusLight } from "react-icons/pi";

const SkillSet = () => {
  return (
    <section className="skill-set-container">
      <div className="header">
        <p>berufliche Meisterschaft</p>
        <h1>das Kompetenzprofil</h1>
      </div>
      <div className="skills">
        <div className="skill">
          <IoColorPaletteOutline />
          <h2>Meister-Colorist</h2>
          <p>
            Spezialisiert auf handgemalte Balayage-Techniken und nuancenreiche
            Blondtöne, die natürliches, von der Sonne geküsstes Haar imitieren.
          </p>
        </div>
        <div className="skill">
          <FiScissors />
          <h2>Präzisionsschnitt</h2>
          <p>
            Expertise in Trockenschnitttechniken, die die natürliche Textur
            respektieren und eine langanhaltende Formgebung fördern.
          </p>
        </div>
        <div className="skill">
          <PiFlowerLotusLight />
          <h2>Kopfhaut-Wellness</h2>
          <p>
            Integration therapeutischer Kopfhautrituale und maßgeschneiderter
            Behandlungen für ganzheitliche Haargesundheit von der Wurzel an.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SkillSet;

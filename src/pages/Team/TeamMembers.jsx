import "./TeamMembers.css";

// ⚠️ DEMO-INHALT: Namen, Fotos und Texte sind Platzhalter.
// Vor dem Livegang durch das echte Team ersetzen.
const unsplash = (id, w = 800, h = 1000) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&crop=faces,edges&w=${w}&h=${h}&q=80`;

const members = [
  {
    id: 1,
    name: "Lena Berger",
    role: "Stylistin & Inhaberin",
    bio: "Lena hat Blanche gegründet, um Beratung und Handwerk auf einem Niveau zu verbinden. Sie hört zuerst zu, bevor die Schere zum Einsatz kommt.",
    specialties: ["Beratung", "Schnitt", "Styling"],
    image: unsplash("photo-1704311183024-5600be2a1a7e"),
  },
  {
    id: 2,
    name: "Mira Kowalski",
    role: "Haar- & Kopfhautpflege",
    bio: "Mira sorgt dafür, dass Haar und Kopfhaut sich rundum wohlfühlen. Ihre Kopfmassage beim Waschen ist bei unseren Kundinnen besonders beliebt.",
    specialties: ["Kopfhautmassage", "Pflegebehandlung", "Waschen & Föhnen"],
    image: unsplash("photo-1595476108010-b4d1f102b1b1"),
  },
  {
    id: 3,
    name: "Daniel Roth",
    role: "Stylist & Colorist",
    bio: "Daniel verbindet moderne Schnitte mit nuancenreicher Farbe. Sein Blick fürs Detail sorgt für Ergebnisse, die im Alltag einfach funktionieren.",
    specialties: ["Präzisionsschnitt", "Balayage", "Herrenschnitt"],
    image: unsplash("photo-1634480258143-ffb5e6df0029"),
  },
];

function TeamMembers() {
  return (
    <section className="team-members-container">
      <div className="header">
        <p>unser team</p>
        <h2>Die Menschen hinter Blanche</h2>
      </div>

      <div className="members">
        {members.map((member) => (
          <article className="member" key={member.id}>
            <div className="member-img">
              <img src={member.image} alt={member.name} loading="lazy" />
            </div>
            <div className="member-info">
              <h3>{member.name}</h3>
              <h4>{member.role}</h4>
              <p>{member.bio}</p>
              <div className="specialties">
                {member.specialties.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default TeamMembers;
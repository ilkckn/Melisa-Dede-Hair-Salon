import "./MyStory.css";

const MyStory = () => {
  return (
    <section className="story-container">
      <div className="story-left">
        <h2>Unsere Geschichte</h2>
        <span></span>
      </div>
      <div className="story-right">
        <p>
          Blanche ist aus einem einfachen Gedanken entstanden: Ein
          Friseurbesuch soll sich nicht nach Terminplan anfühlen, sondern nach
          einer kleinen Auszeit. Aus dieser Idee wurde ein Salon, in dem drei
          Menschen mit unterschiedlichen Stärken unter einem Dach arbeiten und
          sich gegenseitig ergänzen.
        </p>
        <p>
          Unsere Philosophie gründet auf Präzision und einer spürbaren Wärme.
          Jeder Termin beginnt mit einem Gespräch über Ihr Haar, Ihren Alltag
          und Ihre Wünsche. Es geht uns nicht um eine Verwandlung um jeden
          Preis, sondern um eine Verfeinerung, die Ihr Selbstvertrauen im
          Alltag stärkt.
        </p>
        <div className="tags">
          <div className="tag">
            <h2>Philosophie</h2>
            <p>
              Minimalistisch, nachhaltig und abgestimmt auf Ihre
              Gesichtsform und Ihren Lebensstil.
            </p>
          </div>
          <div className="tag">
            <h2>Engagement</h2>
            <p>
              Wir achten auf schonende Pflegeprodukte und arbeiten sorgfältig
              mit Ihrem Haar, damit es lange gesund bleibt.
            </p>
          </div>
          <div className="tag">
            <h2>Privatsphäre</h2>
            <p>
              Auf Wunsch sorgen wir für einen ruhigen, privaten Rahmen, damit
              Sie sich jederzeit ungestört und wohlfühlen.
            </p>
          </div>
          <div className="tag">
            <h2>Teamarbeit</h2>
            <p>
              Drei Fachleute, ein Anspruch: Jede Behandlung entsteht mit einem
              Blick für Details, damit Sie sich auf das Ergebnis verlassen
              können.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyStory;
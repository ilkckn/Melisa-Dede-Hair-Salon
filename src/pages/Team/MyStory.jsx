import "./MyStory.css";

const MyStory = () => {
  return (
    <section className="story-container">
      <div className="story-left">
        <h2>Meine Geschichte</h2>
        <span></span>
      </div>
      <div className="story-right">
        <p>
          Meine Leidenschaft für das Haarhandwerk begann 2016 mit meiner
          Ausbildung, die ich 2019 erfolgreich abschloss. Mein Anspruch, das
          Handwerk auf höchstem Niveau zu beherrschen, führte mich weiter: 2021
          begann ich meine Meisterausbildung und erwarb 2023 den Meistertitel.
          2024 erfüllte ich mir schließlich einen lang gehegten Traum mein
          eigenes Studio.
        </p>
        <p>
          Meine Philosophie gründet auf Präzision und einer spürbaren Wärme.
          Jede Sitzung ist ein gemeinsames Ritual, bei dem ich auf die
          Geschichte Ihres Haares und Ihre persönlichen Wünsche eingehe. Es geht
          mir nicht bloß um eine Veränderung, sondern um eine Verfeinerung, die
          Ihr Selbstvertrauen im Alltag stärkt.
        </p>
        <div className="tags">
          <div className="tag">
            <h2>Philosophie</h2>
            <p>
              Minimalistisch, nachhaltig und auf Ihre individuelle
              Knochenstruktur sowie Ihren Lebensstil abgestimmt.
            </p>
          </div>
          <div className="tag">
            <h2>engagement</h2>
            <p>
              Ich verwende ausschließlich Bio-Produkte aus ethisch vertretbaren
              Quellen, die die Integrität Ihres Haares bewahren.
            </p>
          </div>
          <div className="tag">
            <h2>Privatsphäre</h2>
            <p>
              Für Kundinnen mit Kopftuch steht ein durch eine Trennwand
              abgetrennter, privater Bereich zur Verfügung – damit Sie sich
              jederzeit ungestört und wohlfühlen.
            </p>
          </div>
          <div className="tag">
            <h2>Meisterqualität</h2>
            <p>
              Als geprüfte Friseurmeisterin verbinde ich fundiertes Handwerk mit
              einem geschulten Auge für Details – für ein Ergebnis, auf das Sie sich
              verlassen können.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyStory;

import './LandingHero.css';
import heroImg from '../../assets/images/landing-hero/hero.jpg';

function LandingHero() {
  return (
    <>
      <div className="left">
        <article className="first">
          <span></span>
          <h4>
            Premium Friseursalon <span></span> Freiburg
          </h4>
        </article>
        <article className="second">
          <h1>Die Kunst</h1>
          <span>schöner</span>
          <h1>Haare.</h1>
        </article>
        <article className="third">
          <p>
            Wo Präzision auf Eleganz trifft. Für Damen und Herren – jeder
            Schnitt, jede Farbe, jeder Besuch wird individuell für Sie gestaltet.
          </p>
        </article>
        <div className="buttons">
          <button className="appointment">Termin buchen</button>
          <button className="services">Leistungen ansehen</button>
        </div>
      </div>
      <div className="right">
        <img src={heroImg} alt="Hero" />
      </div>
    </>
  );
}

export default LandingHero;
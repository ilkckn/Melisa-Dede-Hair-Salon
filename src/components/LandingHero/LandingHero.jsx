import './LandingHero.css';
import heroImg from '../../assets/images/landing-hero/hero.jpg';

function LandingHero() {
  return (
    <>
      <div className="left">
        <article className="first">
          <span></span>
          <h4>
            premium hair salon <span></span> freiburg
          </h4>
        </article>
        <article className="second">
          <h1>The art of</h1>
          <span>beautiful</span>
          <h1>Hair.</h1>
        </article>
        <article className="third">
          <p>
            Where precision meets elegance. For women and men — every cut, every
            color, every visit is crafted just for you.
          </p>
        </article>
        <div className="buttons">
          <button className="appointment">Book an Appointment</button>
          <button className="services">View Services</button>
        </div>
      </div>
      <div className="right">
        <img src={heroImg} alt="Hero" />
      </div>
    </>
  );
}

export default LandingHero;

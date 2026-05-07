import FollowOurWork from "../../components/LandingFollowOurWork/FollowOurWork";
import LandingHero from "../../components/LandingHero/LandingHero";
import LandingServices from "../../components/LandingServices/LandingServices";
import OurTeam from "../../components/OurTeam/OurTeam";
import Reviews from "../../components/Reviews/Reviews";
import "./Landing.css";

function Landing() {
  return (
    <main className="landing-main">
      <section className="hero">
        <LandingHero />
      </section>
      <section className="services-section">
        <LandingServices />
      </section>
      <section className="instagram-section">
        <FollowOurWork />
      </section>
      <section className="reviews-section">
        <Reviews />
      </section>
      <section className="team-section">
        <OurTeam />
      </section>
    </main>
  );
}

export default Landing;

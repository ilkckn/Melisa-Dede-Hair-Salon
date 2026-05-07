import "./Team.css";
import our_team from "../../components/OurTeam/OurTeamData.js";

function Team() {
  return (
    <div className="team-container">
      <section className="team-sec-1">
        <div className="team-top-left">
          <div className="team-people-behind">
            <span></span>
            <p>the people behind the craft</p>
          </div>
          <div className="team-header">
            <h1>Meet our</h1>
            <h1>artists</h1>
          </div>
          <p className="team-bottom-text">
            Each member of our team brings years of training, passion and
            artistry. We believe great hair starts with a great relationship —
            for both women and men.
          </p>
        </div>
        <div className="team-top-right">
          <div className="team-box">
            <span>6</span>
            <p>expert stylists</p>
          </div>
          <div className="team-box">
            <span>25</span>
            <p>years combined</p>
          </div>
          <div className="team-box">
            <span>4.9</span>
            <p>google rating</p>
          </div>
          <div className="team-box">
            <span>100%</span>
            <p>satisfaction guarantee</p>
          </div>
        </div>
      </section>

      <section className="team-sec-2">
        <div className="sec-2-header">
          <div className="sec-2-our-team">
            <span></span>
            <p>our team</p>
          </div>
          <div className="sec-2-header-text">
            <h1>The artists</h1>
          </div>
        </div>
        <div className="artist-boxes">
          {our_team.map((artist) => (
            <div className="artist-box" key={artist.id}>
              <div className="artist-image">
                <img src={artist.image} alt={artist.name} />
                <span className="specialist-option">{artist.specialist}</span>
              </div>
              <div className="artist-info">
                <div className="artist-name">
                  <h2>{artist.name}</h2>
                </div>
                <p className="artist-position">{artist.position}</p>
                <p className="artist-bio">{artist.bio}</p>
                <div className="artist-specialties">
                  {artist.specialties.map((spec, index) => (
                    <span key={index}>{spec}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Team;

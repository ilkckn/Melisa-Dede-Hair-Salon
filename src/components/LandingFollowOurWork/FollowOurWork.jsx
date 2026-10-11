import "./FollowOurWork.css";
import { TbArrowNarrowRight } from "react-icons/tb";

const INSTAGRAM_HANDLE = "blanche.hair"; // gerçek hesap adıyla değiştir
const INSTAGRAM_URL = `https://www.instagram.com/${INSTAGRAM_HANDLE}`;

const unsplash = (id) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=800&q=80`;

const GALLERY = [
  {
    // Benyamin Bohlouli – salon iç mekân
    src: unsplash("photo-1633681117690-262b94a01378"),
    alt: "Blanche Salon Innenraum",
  },
  {
    // Hair Spies – aynanın önünde saç kesimi
    src: unsplash("photo-1634480258143-ffb5e6df0029"),
    alt: "Haarschnitt bei Blanche",
  },
  {
    // Adam Winger – saç yıkama
    src: unsplash("photo-1595476108010-b4d1f102b1b1"),
    alt: "Haarwäsche bei Blanche",
  },
  {
    // Lera Kogan – kurdeleli kahverengi saç
    src: unsplash("photo-1605980625982-b128a7e7fde2"),
    alt: "Frisur bei Blanche",
  },
  {
    // Hair Spies – erkek saç kesimi
    src: unsplash("photo-1634480257305-7f4ca3582e6a"),
    alt: "Herrenschnitt bei Blanche",
  },
];

function FollowOurWork() {
  return (
    <div className="follow-our-work-container">
      <div className="top">
        <span></span>
        <h4>folgen sie uns</h4>
      </div>
      <div className="middle">
        <h1>@{INSTAGRAM_HANDLE}</h1>
        <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
          <p>
            Auf Instagram folgen <TbArrowNarrowRight className="arrow" />
          </p>
        </a>
      </div>
      <div className="bottom">
        {GALLERY.map((img) => (
          <div className="box" key={img.src}>
            <img src={img.src} alt={img.alt} loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FollowOurWork;
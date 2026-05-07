import "./ServicesBottom.css";
import women_hair from "../../assets/images/Landing-services/women-hair/hair.png";
import men_hair from "../../assets/images/Landing-services/men-hair/man-hair.png";
import color from "../../assets/images/Landing-services/color-highlights/color-highlight.png";

function ServicesBottom() {
  return (
    <div className="services-bottom-container">
      <section className="women-services">
        <div className="sec-1">
          <div className="icon">
            <img src={women_hair} alt="Women's Hair" />
          </div>
          <h1>Women's Services</h1>
        </div>
        <div className="sec-2">
          <div className="content-1">
            <h2>Wash, Cut & Blow-dry</h2>
            <div className="par-price">
              <p>Consultation included</p>
              <p>
                60 min / <span>55€</span>
              </p>
            </div>
          </div>
          <div className="content-2">
            <h2>Cut Only</h2>
            <div className="par-price">
              <p>Without wash</p>
              <p>
                45 min / <span>40€</span>
              </p>
            </div>
          </div>
          <div className="content-3">
            <h2>Blow-dry & Styling</h2>
            <div className="par-price">
              <p>Without cut</p>
              <p>
                30 min / <span>30€</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="men-services">
        <div className="sec-1">
          <div className="icon">
            <img src={men_hair} alt="Men's Hair" />
          </div>
          <h1>Men's Services</h1>
        </div>
        <div className="sec-2">
          <div className="content-1">
            <h2>Haircut & Style</h2>
            <div className="par-price">
              <p>Wash, cut and styling</p>
              <p>
                45 min / <span>32€</span>
              </p>
            </div>
          </div>
          <div className="content-2">
            <h2>Fade + Beard Trim</h2>
            <div className="par-price">
              <p>Full grooming package</p>
              <p>
                60 min / <span>42€</span>
              </p>
            </div>
          </div>
          <div className="content-3">
            <h2>Beard Grooming</h2>
            <div className="par-price">
              <p>Shape, trim and conditioning</p>
              <p>
                30 min / <span>20€</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="color-services">
        <div className="sec-1">
          <div className="icon">
            <img src={color} alt="Color Services" />
          </div>
          <h1>Color Services</h1>
        </div>
        <div className="sec-2">
          <div className="content-1">
            <h2>Full Color</h2>
            <div className="par-price">
              <p>Single process all-over</p>
              <p>
                90 min / <span>80€</span>
              </p>
            </div>
          </div>
          <div className="content-2">
            <h2>Balayage</h2>
            <div className="par-price">
              <p>Hand-painted highlights</p>
              <p>
                150 min / <span>120€</span>
              </p>
            </div>
          </div>
          <div className="content-3">
            <h2>Highlights</h2>
            <div className="par-price">
              <p>Partial or full foil</p>
              <p>
                120 min / <span>90€</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ServicesBottom;

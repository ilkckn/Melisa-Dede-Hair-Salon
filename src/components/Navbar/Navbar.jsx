import { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo/logo.png";
import mobileLogo from "../../assets/images/logo/mobile-logo.png";
import { BiMenu } from "react-icons/bi";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    setIsMenuOpen(false);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="nav-main">
      <nav>
        <div className="left">
          <div className="logo">
            <NavLink to="/">
              <img src={logo} alt="Logo" />
            </NavLink>
            <span>lanche</span>
          </div>
        </div>

        <div className="right">
          <ul>
            <li>
              <NavLink to="/" onClick={handleClick}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" onClick={handleClick}>
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/team" onClick={handleClick}>
                Team
              </NavLink>
            </li>
            <li>
              <NavLink to="/gallery" onClick={handleClick}>
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink to="/appointment" onClick={handleClick}>
                Appointment
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={handleClick}>
                Contact
              </NavLink>
            </li>
            <button className="book-now">
              <NavLink to="/appointment" onClick={handleClick}>
                Book Now
              </NavLink>
            </button>
            <BiMenu className="burger-icon" onClick={handleMenuToggle} />
          </ul>

          {isMenuOpen && (
            <>
              <div className="mobile-menu-overlay" onClick={handleClick}></div>
              <div className="mobile-menu">
                <ul>
                  <li>
                    <NavLink to="/" onClick={handleClick}>
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/services" onClick={handleClick}>
                      Services
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/team" onClick={handleClick}>
                      Team
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/gallery" onClick={handleClick}>
                      Gallery
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/appointment" onClick={handleClick}>
                      Appointment
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact" onClick={handleClick}>
                      Contact
                    </NavLink>
                  </li>
                </ul>
                <button className="mobile-book-now">
                  <NavLink to="/appointment" onClick={handleClick}>
                    Book Now
                  </NavLink>
                </button>
                <div className="mobile-logo">
                  <NavLink to="/" onClick={handleClick}>
                    <img src={mobileLogo} alt="Mobile Logo" />
                  </NavLink>
                </div>
              </div>
            </>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

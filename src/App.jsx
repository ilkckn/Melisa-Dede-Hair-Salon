import { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Landing from "./pages/Home/Landing";
import Services from "./pages/Services/Services";
import Footer from "./components/Footer/Footer";
import Team from "./pages/Team/Team";
import Gallery from "./pages/Gallery/Gallery";
import Appointment from "./pages/Appointment/Appointment";
import Contact from "./pages/Contact/Contact";
import AllReviews from "./components/AllReviews/AllReviews";

function App() {
  const [showButton, setShowButton] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  }, [location.pathname]);

  useEffect(() => {
    const handleShowButton = () => {
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener("scroll", handleShowButton);
    return () => {
      window.removeEventListener("scroll", handleShowButton);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="App">
        <section className="page-content">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/services" element={<Services />} />
            <Route path="/team" element={<Team />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/reviews" element={<AllReviews />} />
          </Routes>
        </section>
      </main>
      <Footer />
      {showButton && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          &#8679;
        </button>
      )}
    </>
  );
}

export default App;

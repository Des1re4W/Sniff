import { useState, useEffect } from "react";
import "./css/Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("services");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const handleScroll = () => {
      let current = "services"; 
      const scrollPos = window.scrollY + 85;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
          current = section.getAttribute("id");
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="header">
      <div className="logo-container">Sniff.</div>

      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <a
          href="#services"
          className={activeSection === "services" ? "active" : ""}
          onClick={() => setMenuOpen(false)}
        >
          Services
        </a>
        <a
          href="#pricing"
          className={activeSection === "pricing" ? "active" : ""}
          onClick={() => setMenuOpen(false)}
        >
          Pricing
        </a>
        <a
          href="#location"
          className={activeSection === "location" ? "active" : ""}
          onClick={() => setMenuOpen(false)}
        >
          Location
        </a>
      </nav>

      <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>
    </header>
  );
}

export default Header;

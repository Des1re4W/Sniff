import { useState, useEffect } from "react";
import "./css/Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

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
      <a
        href="#home"
        className="logo-container"
        onClick={(e) => {
          e.preventDefault();
          const homeSection = document.querySelector("#home");
          homeSection.scrollIntoView({ behavior: "smooth" });
          setMenuOpen(false);
        }}
      >
        Sniff.
      </a>
        
      <nav className={`nav ${menuOpen ? "open" : ""}`}>
                <a
          href="#"
          className={activeSection === "about" ? "active" : ""}
          onClick={(e) => {
            e.preventDefault();
            document.querySelector("#about").scrollIntoView({ behavior: "smooth" });
            setMenuOpen(false);
          }}
        >
          About
        </a>
        <a
          href="#"
          className={activeSection === "services" ? "active" : ""}
          onClick={(e) => {
            e.preventDefault(); 
            const section = document.querySelector("#services");
            section.scrollIntoView({ behavior: "smooth" });
            setMenuOpen(false);
          }}
        >
          Services
        </a>
        <a
          href="#"
          className={activeSection === "pricing" ? "active" : ""}
          onClick={(e) => {
            e.preventDefault();
            document.querySelector("#pricing").scrollIntoView({ behavior: "smooth" });
            setMenuOpen(false);
          }}
        >
          Pricing
        </a>
        <a
          href="#location"
          className={activeSection === "location" ? "active" : ""}
          onClick={(e) => 
            {
              e.preventDefault();
              document.querySelector("#location").scrollIntoView({ behavior: "smooth" });
              setMenuOpen(false)}
            }
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

import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

import logo from "../../assets/images/logo-head.png";
import "./style/Header.css";

const navOptions = [
  { name: "About", link: "#aboutId" },
  { name: "Services", link: "#servicesId" },
  { name: "Games", link: "#gamesId" },
  { name: "Team", link: "#teamId" },
  { name: "News", link: "#newsId" },
];

const Header = () => {
  const { pathname } = useLocation();
  const [isHidden, setIsHidden] = useState(false);
  const [activeSection, setActiveSection] = useState("homeId");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cleanupRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    document.documentElement.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 0) {
        setIsHidden(false);
      } else if (currentScrollY > lastScrollY) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const sections = navOptions
        .map((option) => document.getElementById(option.link.substring(1)))
        .filter(Boolean);

      if (!sections.length) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActiveSection(entry.target.id);
          });
        },
        { threshold: 0.3 },
      );

      sections.forEach((section) => observer.observe(section));
      cleanupRef.current = () => observer.disconnect();
    }, 100);

    return () => {
      clearTimeout(timeout);
      cleanupRef.current?.();
    };
  }, [pathname]);

  const mailto = "mailto:badatgamesstudio@gmail.com";

  return (
    <header className={`navbar${isHidden ? " navbar--hidden" : ""}`}>
      <nav className="nav-container">
        <div className="nav-left">
          <Link to="/" className="nav-logo">
            <img src={logo} alt="Bad At Games Logo" />
          </Link>
        </div>

        <div className="nav-right">
          <ul
            className={`nav-options ${isMenuOpen ? "open" : ""} ${pathname === "/" ? "" : "hidden"}`}
          >
            {navOptions.map((option) => {
              const sectionId = option.link.substring(1);

              return (
                <li key={option.name}>
                  <a
                    href={option.link}
                    className={activeSection === sectionId ? "active" : ""}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {option.name}
                  </a>
                </li>
              );
            })}
          </ul>
          <a className="contact-btn" href={mailto}>
            START A PROJECT <span>↗</span>
          </a>
          <div
            className={`hamburger-menu ${isMenuOpen ? "open" : ""} ${pathname === "/" ? "" : "hidden"}`}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <span className="bars"></span>
            <span className="bars"></span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import siteConfig from "../../config/siteConfig";
import navLinks from "../../data/navigation";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="container nav__inner">
        <Link to="/" className="nav__brand" aria-label={`${siteConfig.name} home`}>
          <img src={siteConfig.logo} alt={`${siteConfig.name} logo`} className="nav__logo" />
        </Link>

        <nav className="nav__links" aria-label="Primary">
          {navLinks.map((l) => (
            <NavLink
              key={l.path}
              to={l.path}
              className={({ isActive }) => `nav__link ${isActive ? "is-active" : ""}`}
              end={l.path === "/"}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="nav__actions">
          <a href={`tel:${siteConfig.phoneRaw}`} className="btn btn--primary nav__cta">
            <Phone size={17} /> <span>Enquire Now</span>
          </a>
          <button
            className="nav__toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div className={`nav__drawer ${open ? "is-open" : ""}`}>
        <nav aria-label="Mobile">
          {navLinks.map((l) => (
            <NavLink
              key={l.path}
              to={l.path}
              className={({ isActive }) => `nav__drawer-link ${isActive ? "is-active" : ""}`}
              end={l.path === "/"}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
        <a href={`tel:${siteConfig.phoneRaw}`} className="btn btn--primary btn--block">
          <Phone size={18} /> Call {siteConfig.phone}
        </a>
      </div>
      {open && <button className="nav__scrim" aria-hidden="true" tabIndex={-1} onClick={() => setOpen(false)} />}
    </header>
  );
}

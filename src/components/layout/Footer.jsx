import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import siteConfig, { hasEmail, directionsUrl } from "../../config/siteConfig";
import navLinks from "../../data/navigation";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <img
            src={siteConfig.logo}
            alt={`${siteConfig.name} logo`}
            className="footer__logo"
            width="757"
            height="407"
            loading="lazy"
          />
          <p className="footer__desc">
            A professional educational institute serving students in {siteConfig.city},{" "}
            {siteConfig.district}, {siteConfig.state}.
          </p>
        </div>

        <div>
          <h4 className="footer__title">Quick Links</h4>
          <ul className="footer__links">
            {navLinks.map((l) => (
              <li key={l.path}>
                <Link to={l.path}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="footer__title">Contact</h4>
          <ul className="footer__contact">
            <li>
              <MapPin size={18} />
              <a href={directionsUrl} target="_blank" rel="noopener noreferrer">
                {siteConfig.address}
              </a>
            </li>
            <li>
              <Phone size={18} />
              <a href={`tel:${siteConfig.phoneRaw}`}>{siteConfig.phone}</a>
            </li>
            {hasEmail && (
              <li>
                <Mail size={18} />
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              </li>
            )}
          </ul>
        </div>
      </div>

      <div className="footer__bar">
        <div className="container">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

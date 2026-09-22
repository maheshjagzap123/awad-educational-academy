import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import siteConfig from "../../config/siteConfig";
import "./EmptyState.css";

/**
 * Friendly, attractive placeholder used where content is awaiting
 * confirmation from the academy. Replaces the plain dashed note with
 * an illustrated card + a helpful call-to-action (no fabricated data).
 */
export default function EmptyState({ icon: Icon, title, message, showCta = true }) {
  return (
    <div className="empty-state">
      <div className="empty-state__art" aria-hidden="true">
        {Icon && <Icon size={34} />}
        <span className="empty-state__ring" />
        <span className="empty-state__ring empty-state__ring--2" />
      </div>
      <h3 className="empty-state__title">{title}</h3>
      <p className="empty-state__text muted">{message}</p>
      {showCta && (
        <div className="empty-state__cta">
          <a href={`tel:${siteConfig.phoneRaw}`} className="btn btn--primary">
            <Phone size={17} /> Call the Academy
          </a>
          <Link to="/contact" className="btn btn--ghost">
            Send an Enquiry
          </Link>
        </div>
      )}
    </div>
  );
}

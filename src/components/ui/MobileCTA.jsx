import { Phone, MessageCircle } from "lucide-react";
import siteConfig, { hasWhatsApp } from "../../config/siteConfig";
import "./MobileCTA.css";

/**
 * Sticky bottom action bar shown on mobile only — the primary
 * conversion path for the academy's mostly-mobile audience.
 * WhatsApp button appears only after the official number is confirmed.
 */
export default function MobileCTA() {
  const waHref = hasWhatsApp
    ? `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`
    : null;

  return (
    <div className="mcta" role="region" aria-label="Quick contact">
      <a href={`tel:${siteConfig.phoneRaw}`} className="mcta__btn mcta__btn--call">
        <Phone size={19} /> Call Now
      </a>
      {waHref ? (
        <a href={waHref} target="_blank" rel="noopener noreferrer" className="mcta__btn mcta__btn--wa">
          <MessageCircle size={19} /> WhatsApp
        </a>
      ) : (
        <a href="/contact" className="mcta__btn mcta__btn--enquiry">
          <MessageCircle size={19} /> Enquire
        </a>
      )}
    </div>
  );
}

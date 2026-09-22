import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { MapPin, Phone, Mail, MessageCircle, Send } from "lucide-react";
import Layout from "../components/layout/Layout";
import PageHero from "../components/ui/PageHero";
import ComingSoon from "../components/ui/ComingSoon";
import useSeo from "../hooks/useSeo";
import siteConfig, { hasEmail, hasWhatsApp, hasMap } from "../config/siteConfig";
import { courses } from "../data/content";
import "./pages.css";

export default function ContactPage() {
  useSeo({
    title: "Contact Awad Educational Academy | Kaij, Beed",
    description:
      "Contact Awad Educational Academy in Kaij, Beed, Maharashtra. Call +91 94221 05262 or send an enquiry about courses and admissions.",
    path: "/contact",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Contact", path: "/contact" },
    ],
  });

  const [params] = useSearchParams();
  const preselected = params.get("course") || "";
  const [submitted, setSubmitted] = useState(false);

  const waHref = hasWhatsApp
    ? `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`
    : null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const name = data.get("name");
    const mobile = data.get("mobile");
    const course = data.get("course");
    const message = data.get("message");

    // With no backend yet, hand the enquiry off via a phone/WhatsApp friendly summary.
    const text = `Enquiry from ${name} (${mobile}).%0ACourse: ${course}.%0A${message || ""}`;
    if (waHref) {
      window.open(`https://wa.me/${siteConfig.whatsapp}?text=${text}`, "_blank", "noopener");
    }
    setSubmitted(true);
    e.target.reset();
  };

  return (
    <Layout>
      <PageHero
        title="Contact Us"
        subtitle="Have a question about our classes? Get in touch with the academy."
      />
      <section className="section">
        <div className="container contact-grid">
          {/* Contact info */}
          <div>
            <h2>Get in Touch</h2>
            <ul className="info-list">
              <li>
                <MapPin size={20} />
                <span>{siteConfig.address}</span>
              </li>
              <li>
                <Phone size={20} />
                <a href={`tel:${siteConfig.phoneRaw}`}>{siteConfig.phone}</a>
              </li>
              {hasEmail && (
                <li>
                  <Mail size={20} />
                  <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                </li>
              )}
            </ul>

            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 22 }}>
              <a href={`tel:${siteConfig.phoneRaw}`} className="btn btn--primary">
                <Phone size={18} /> Call Now
              </a>
              {waHref && (
                <a href={waHref} target="_blank" rel="noopener noreferrer" className="btn btn--outline">
                  <MessageCircle size={18} /> WhatsApp
                </a>
              )}
            </div>

            <div style={{ marginTop: 26 }}>
              {hasMap ? (
                <iframe
                  className="map-embed"
                  src={siteConfig.googleMapsEmbed}
                  title={`${siteConfig.name} location`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              ) : (
                <ComingSoon message="The academy's verified Google Maps location will be embedded here once confirmed." />
              )}
            </div>
          </div>

          {/* Enquiry form */}
          <div className="card">
            <h2 style={{ marginTop: 0 }}>Send an Enquiry</h2>
            {submitted && (
              <div className="tbp-note" style={{ marginBottom: 16 }}>
                Thank you! Your enquiry has been prepared. If it did not open automatically, please
                call us at {siteConfig.phone}.
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="field">
                <label htmlFor="name">Full Name</label>
                <input id="name" name="name" type="text" required autoComplete="name" />
              </div>
              <div className="field">
                <label htmlFor="mobile">Mobile Number</label>
                <input id="mobile" name="mobile" type="tel" required autoComplete="tel" />
              </div>
              <div className="field">
                <label htmlFor="email">Email (optional)</label>
                <input id="email" name="email" type="email" autoComplete="email" />
              </div>
              <div className="field">
                <label htmlFor="course">Course / Class Interested In</label>
                <select id="course" name="course" defaultValue={preselected}>
                  <option value="">Select a course</option>
                  {courses.map((c) => (
                    <option key={c.id} value={c.name}>
                      {c.name}
                    </option>
                  ))}
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" placeholder="How can we help you?" />
              </div>
              <button type="submit" className="btn btn--primary btn--block">
                <Send size={17} /> Send Enquiry
              </button>
              <p className="muted" style={{ fontSize: "0.82rem", marginTop: 12, marginBottom: 0 }}>
                By submitting, you agree to be contacted by the academy regarding your enquiry.
              </p>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}

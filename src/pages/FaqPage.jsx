import { Link } from "react-router-dom";
import { Phone, ArrowRight } from "lucide-react";
import Layout from "../components/layout/Layout";
import PageHero from "../components/ui/PageHero";
import Reveal from "../components/ui/Reveal";
import useSeo from "../hooks/useSeo";
import siteConfig from "../config/siteConfig";
import { faqs } from "../data/faqs";
import "./pages.css";

export default function FaqPage() {
  useSeo({
    title: "FAQs | Awad Educational Academy, Kaij, Beed",
    description:
      "Answers to common questions about Awad Educational Academy in Kaij, Beed — courses offered, location, admission, class timings and teaching approach.",
    path: "/faq",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "FAQ", path: "/faq" },
    ],
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  });

  return (
    <Layout>
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Common questions about courses, admission, location and timings at Awad Educational Academy."
      />
      <section className="section">
        <div className="container faq-wrap">
          <dl className="faq-list">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 50} as="div" className="faq-item">
                <dt className="faq-q">{f.q}</dt>
                <dd className="faq-a muted">{f.a}</dd>
              </Reveal>
            ))}
          </dl>

          <div className="feature-panel" style={{ marginTop: 36 }}>
            <h2>Still have a question?</h2>
            <p>
              Call the academy and we'll be happy to help you choose the right course for your
              child.
            </p>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "center" }}>
              <a href={`tel:${siteConfig.phoneRaw}`} className="btn btn--primary" data-analytics="phone_click">
                <Phone size={18} /> {siteConfig.phone}
              </a>
              <Link to="/contact" className="btn btn--outline">
                Contact Us <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

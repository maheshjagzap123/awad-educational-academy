import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "../components/layout/Layout";
import PageHero from "../components/ui/PageHero";
import ComingSoon from "../components/ui/ComingSoon";
import useSeo from "../hooks/useSeo";
import siteConfig from "../config/siteConfig";
import { about } from "../data/content";
import "./pages.css";

export default function AboutPage() {
  useSeo({
    title: "About Awad Educational Academy | Kaij, Beed",
    description:
      "Learn about Awad Educational Academy, an educational institute in Kaij, Beed, Maharashtra.",
    path: "/about",
  });

  return (
    <Layout>
      <PageHero
        title="About Us"
        subtitle={`An educational institute in ${siteConfig.city}, ${siteConfig.district}, ${siteConfig.state}.`}
      />
      <section className="section">
        <div className="container prose">
          <h2>Academy Introduction</h2>
          <p className="muted">{about.intro}</p>
          <p className="muted">
            Awad Educational Academy is located at {siteConfig.address}. A detailed introduction
            covering the academy's teaching approach and history will be added as the academy shares
            more information.
          </p>

          <h2>Mission</h2>
          {about.mission ? <p className="muted">{about.mission}</p> : <ComingSoon message="The academy's mission statement will be added here." />}

          <h2>Vision</h2>
          {about.vision ? <p className="muted">{about.vision}</p> : <ComingSoon message="The academy's vision statement will be added here." />}

          <h2>Our Journey</h2>
          {about.milestones.length ? (
            <ul>
              {about.milestones.map((m, i) => (
                <li key={i}>
                  {m.year ? <strong>{m.year}: </strong> : null}
                  {m.text}
                </li>
              ))}
            </ul>
          ) : (
            <ComingSoon message="Establishment year and key milestones will be added here." />
          )}

          <h2>Management</h2>
          {about.management.length ? (
            <div className="grid grid--2" style={{ marginTop: 16 }}>
              {about.management.map((p, i) => (
                <div key={i} className="card">
                  <strong>{p.name}</strong>
                  {p.designation && <p className="muted" style={{ margin: "4px 0" }}>{p.designation}</p>}
                  {p.intro && <p className="muted" style={{ margin: 0 }}>{p.intro}</p>}
                </div>
              ))}
            </div>
          ) : (
            <ComingSoon message="Management details will be added here once confirmed by the academy." />
          )}

          <div style={{ marginTop: 32 }}>
            <Link to="/courses" className="btn btn--primary">
              Explore Our Courses <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}

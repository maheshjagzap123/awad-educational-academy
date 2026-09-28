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
      "Learn about Awad Educational Academy, an educational institute in Kaij, Beed, Maharashtra — our location, teaching approach and how to get in touch.",
    path: "/about",
    type: "profile",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "About", path: "/about" },
    ],
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
            The academy is located at {siteConfig.address}. Its course structure is designed around
            strengthening students' academic basics while encouraging preparation for examinations,
            Olympiad-style competitions and higher-level academic goals.
          </p>

          <h2>Mission</h2>
          {about.mission ? <p className="muted">{about.mission}</p> : <ComingSoon message="The academy's mission statement will be added here." />}

          <h2>Vision</h2>
          {about.vision ? <p className="muted">{about.vision}</p> : <ComingSoon message="The academy's vision statement will be added here." />}

          {about.focusAreas?.length > 0 && (
            <>
              <h2>Our Focus</h2>
              <ul>
                {about.focusAreas.map((f, i) => (
                  <li key={i} className="muted">{f}</li>
                ))}
              </ul>
            </>
          )}

          {about.learningAreas?.length > 0 && (
            <>
              <h2>Key Learning Areas</h2>
              <ul>
                {about.learningAreas.map((l, i) => (
                  <li key={i} className="muted">{l}</li>
                ))}
              </ul>
            </>
          )}

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
                <div key={i} className="card about-mgmt">
                  {p.photo && (
                    <img className="about-mgmt__photo" src={p.photo} alt={p.name} loading="lazy" />
                  )}
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

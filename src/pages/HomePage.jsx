import { Link } from "react-router-dom";
import {
  ArrowRight,
  GraduationCap,
  Users,
  BookOpen,
  Compass,
  Lightbulb,
  HeartHandshake,
  Award,
  Image as ImageIcon,
  Phone,
  MessageCircle,
  MapPin,
  Navigation,
} from "lucide-react";
import Layout from "../components/layout/Layout";
import Hero from "../components/sections/Hero";
import TrustStrip from "../components/sections/TrustStrip";
import Process from "../components/sections/Process";
import PhotoMarquee from "../components/sections/PhotoMarquee";
import SectionHeading from "../components/ui/SectionHeading";
import CourseCard from "../components/ui/CourseCard";
import FacultyCard from "../components/ui/FacultyCard";
import EmptyState from "../components/ui/EmptyState";
import Reveal from "../components/ui/Reveal";
import useSeo from "../hooks/useSeo";
import siteConfig, {
  hasWhatsApp,
  directionsUrl,
  mapEmbedUrl,
  organizationJsonLd,
} from "../config/siteConfig";
import { courses, whyChooseUs, faculty, testimonials, galleryImages } from "../data/content";
import "./HomePage.css";

const iconMap = {
  GraduationCap,
  Users,
  BookOpen,
  Compass,
  Lightbulb,
  HeartHandshake,
  Award,
};

export default function HomePage() {
  useSeo({
    title: "Awad Educational Academy | Education & Classes in Kaij, Beed",
    description:
      "Awad Educational Academy is an educational institute in Kaij, Beed, Maharashtra. Explore courses, faculty, results and contact information. Enquire today.",
    path: "/",
    // A single @graph carrying both the WebSite entity and the fuller
    // EducationalOrganization (name, url, logo, image, address, phone,
    // and sameAs once official profiles are confirmed). Verified data
    // only — no ratings, reviews, hours or social links are invented.
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebSite",
          name: siteConfig.name,
          url: siteConfig.siteUrl || undefined,
        },
        organizationJsonLd(),
      ],
    },
  });

  const confirmedCourses = courses.filter((c) => c.confirmed);
  const previewCourses = (confirmedCourses.length ? confirmedCourses : courses).slice(0, 3);
  const confirmedFaculty = faculty.filter((f) => f.confirmed !== false);
  const confirmedTestimonials = testimonials.filter((t) => t.confirmed !== false);
  const waHref = hasWhatsApp
    ? `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`
    : null;

  return (
    <Layout>
      <Hero />
      <TrustStrip />

      {/* Section 2 — Introduction */}
      <section className="section">
        <div className="container intro">
          <Reveal>
            <SectionHeading eyebrow="Welcome" title="About the Academy" center />
            <p className="intro__text muted">{siteConfig.description}</p>
            <div className="intro__cta">
              <Link to="/about" className="btn btn--outline">
                Know More About Us <ArrowRight size={17} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Section 3 — Courses / Classes preview */}
      <section className="section section--soft">
        <div className="container">
          <SectionHeading
            eyebrow="Courses / Classes"
            title="What We Offer"
            subtitle="Explore the courses and classes at Awad Educational Academy."
            center
          />
          <div className="grid grid--3">
            {previewCourses.map((c, i) => (
              <Reveal key={c.id} delay={i * 90}>
                <CourseCard course={c} />
              </Reveal>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: 32 }}>
            <Link to="/courses" className="btn btn--primary">
              View All Courses <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* Section 4 — Why Choose Us */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Why Choose Awad Educational Academy"
            center
          />
          <div className="grid grid--3">
            {whyChooseUs.map((item, i) => {
              const Icon = iconMap[item.icon] || GraduationCap;
              return (
                <Reveal key={item.title} delay={i * 70}>
                  <div className="why">
                    <span className="why__icon">
                      <Icon size={24} />
                    </span>
                    <h3 className="why__title">{item.title}</h3>
                    <p className="muted why__text">
                      {item.text || "Details will be shared by the academy soon."}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 5 — Faculty preview */}
      <section className="section section--soft">
        <div className="container">
          <SectionHeading eyebrow="Faculty" title="Meet Our Faculty" center />
          {confirmedFaculty.length ? (
            <>
              <div className="grid grid--3">
                {confirmedFaculty.slice(0, 3).map((m) => (
                  <FacultyCard key={m.id} member={m} />
                ))}
              </div>
              <div className="text-center" style={{ marginTop: 28 }}>
                <Link to="/faculty" className="btn btn--primary">
                  Meet Our Faculty <ArrowRight size={17} />
                </Link>
              </div>
            </>
          ) : (
            <EmptyState
              icon={Users}
              title="Faculty Profiles Coming Soon"
              message="We're preparing profiles of our teachers. Call the academy to learn more about who will be teaching you."
            />
          )}
        </div>
      </section>

      {/* Section 6 — Results & Achievements */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className="feature-panel">
              <span className="pill" style={{ marginBottom: 14 }}>Results &amp; Achievements</span>
              <span className="results-badge">
                <Award size={30} />
              </span>
              <h2>Our Students Make Us Proud</h2>
              <p>Verified results and achievements will be showcased here as the academy shares them.</p>
              <Link to="/results" className="btn btn--primary">
                View Results &amp; Achievements <ArrowRight size={17} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Section 7 — Testimonials */}
      <section className="section section--soft">
        <div className="container">
          <SectionHeading eyebrow="Testimonials" title="What Students & Parents Say" center />
          {confirmedTestimonials.length ? (
            <div className="grid grid--3">
              {confirmedTestimonials.slice(0, 3).map((t) => (
                <blockquote key={t.id} className="quote card">
                  <p>“{t.text}”</p>
                  <footer>
                    <strong>{t.name}</strong>
                    {t.role && <span className="muted"> · {t.role}</span>}
                  </footer>
                </blockquote>
              ))}
            </div>
          ) : (
            <EmptyState
              icon={MessageCircle}
              title="Real Stories, Coming Soon"
              message="Genuine feedback from our students and parents will be shared here soon."
              showCta={false}
            />
          )}
          <div className="text-center" style={{ marginTop: 28 }}>
            <Link to="/testimonials" className="btn btn--outline">
              Read Testimonials <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* Section 8 — Gallery preview (premium auto-scrolling strip) */}
      {galleryImages.length ? (
        <PhotoMarquee
          eyebrow="Gallery"
          title="A Glimpse of Our Academy"
          subtitle="Moments from classrooms, sessions and student life at Awad Educational Academy."
        />
      ) : (
        <section className="section">
          <div className="container">
            <Reveal>
              <div className="feature-panel">
                <span className="results-badge">
                  <ImageIcon size={30} />
                </span>
                <h2>A Glimpse of Our Academy</h2>
                <p>
                  Photographs of the academy, classrooms, students, events and activities will be
                  added here.
                </p>
                <Link to="/gallery" className="btn btn--primary">
                  View Gallery <ArrowRight size={17} />
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* How to Join */}
      <Process />

      {/* Section — Location / Map */}
      <section className="section section--soft">
        <div className="container">
          <SectionHeading
            eyebrow="Visit Us"
            title="Find the Academy"
            subtitle={`${siteConfig.city}, ${siteConfig.district}, ${siteConfig.state}`}
            center
          />
          <Reveal>
            <div className="home-map">
              <iframe
                className="home-map__frame"
                src={mapEmbedUrl}
                title={`${siteConfig.name} location map`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <div className="home-map__info">
                <span className="home-map__icon">
                  <MapPin size={22} />
                </span>
                <p className="home-map__address">{siteConfig.address}</p>
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--primary"
                >
                  <Navigation size={18} /> Get Directions
                </a>
                <a href={`tel:${siteConfig.phoneRaw}`} className="btn btn--outline">
                  <Phone size={18} /> {siteConfig.phone}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Section 9 — Contact / Enquiry CTA */}
      <section className="cta-band">
        <div className="container cta-band__inner">
          <h2 className="cta-band__title">Have a Question About Our Classes?</h2>
          <p className="cta-band__text">
            Get in touch with {siteConfig.name} today.
          </p>
          <div className="cta-band__actions">
            <a href={`tel:${siteConfig.phoneRaw}`} className="btn btn--primary">
              <Phone size={18} /> Call Now
            </a>
            {waHref && (
              <a href={waHref} target="_blank" rel="noopener noreferrer" className="btn btn--ghost">
                <MessageCircle size={18} /> WhatsApp
              </a>
            )}
            <Link to="/contact" className="btn btn--ghost">
              <MessageCircle size={18} /> Send Enquiry
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}

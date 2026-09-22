import { Link } from "react-router-dom";
import { Phone, BookOpen, MapPin, Sparkles, GraduationCap, Users } from "lucide-react";
import siteConfig from "../../config/siteConfig";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__mesh" aria-hidden="true" />
      <div className="hero__grid-lines" aria-hidden="true" />

      <div className="container hero__inner">
        <div className="hero__copy">
          <span className="hero__eyebrow">
            <Sparkles size={15} /> {siteConfig.city}, {siteConfig.district}, {siteConfig.state}
          </span>
          <h1 className="hero__title">
            {siteConfig.name.split(" ").slice(0, -1).join(" ")}{" "}
            <span className="hero__accent">{siteConfig.name.split(" ").slice(-1)}</span>
          </h1>
          <p className="hero__lead">
            A professional educational institute helping students in {siteConfig.city} learn,
            grow and succeed.
          </p>

          <div className="hero__actions">
            <a href={`tel:${siteConfig.phoneRaw}`} className="btn btn--primary">
              <Phone size={18} /> Enquire Now
            </a>
            <Link to="/courses" className="btn btn--ghost">
              <BookOpen size={18} /> Explore Courses
            </Link>
          </div>

          <div className="hero__meta">
            <span>
              <MapPin size={16} /> Kaij–Sabla Road, Kaij
            </span>
            <span>
              <Phone size={16} /> {siteConfig.phone}
            </span>
          </div>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <div className="hero__card hero__card--logo">
            <img src={siteConfig.logo} alt="" />
          </div>
          <div className="hero__chip hero__chip--1">
            <span className="hero__chip-icon">
              <GraduationCap size={20} />
            </span>
            <div>
              <strong>Quality Teaching</strong>
              <small>Focused learning</small>
            </div>
          </div>
          <div className="hero__chip hero__chip--2">
            <span className="hero__chip-icon hero__chip-icon--gold">
              <Users size={20} />
            </span>
            <div>
              <strong>Student First</strong>
              <small>Personal guidance</small>
            </div>
          </div>
          <div className="hero__glow" />
        </div>
      </div>

      <div className="hero__wave" aria-hidden="true">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path
            d="M0,40 C360,90 1080,-10 1440,40 L1440,80 L0,80 Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  );
}

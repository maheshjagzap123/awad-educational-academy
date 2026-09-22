import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import "./PageHero.css";

/** Interior-page header with gradient mesh + breadcrumbs. */
export default function PageHero({ title, subtitle, crumb }) {
  return (
    <section className="page-hero">
      <div className="page-hero__mesh" aria-hidden="true" />
      <div className="page-hero__grid-lines" aria-hidden="true" />
      <div className="container page-hero__inner">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <ChevronRight size={14} />
          <span>{crumb || title}</span>
        </nav>
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
      <div className="page-hero__wave" aria-hidden="true">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path d="M0,30 C360,70 1080,-10 1440,30 L1440,60 L0,60 Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  );
}

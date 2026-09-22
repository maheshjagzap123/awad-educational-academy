import { Link } from "react-router-dom";
import { Clock, MapPin, GraduationCap, ArrowRight } from "lucide-react";
import "./Cards.css";

/**
 * Renders a course/class card. Only fields that the academy has
 * confirmed (non-empty) are displayed — never invents details.
 */
export default function CourseCard({ course }) {
  const { name, shortDescription, duration, mode, eligibility, batchTiming, slug } = course;

  return (
    <article className="ccard">
      <div className="ccard__head">
        <span className="ccard__icon">
          <GraduationCap size={22} />
        </span>
        <h3 className="ccard__title">{name}</h3>
      </div>

      {shortDescription ? (
        <p className="muted ccard__desc">{shortDescription}</p>
      ) : (
        <p className="muted ccard__desc">Course details will be updated soon.</p>
      )}

      <ul className="ccard__meta">
        {duration && (
          <li>
            <Clock size={16} /> {duration}
          </li>
        )}
        {batchTiming && (
          <li>
            <Clock size={16} /> {batchTiming}
          </li>
        )}
        {mode && (
          <li>
            <MapPin size={16} /> {mode}
          </li>
        )}
        {eligibility && (
          <li>
            <GraduationCap size={16} /> {eligibility}
          </li>
        )}
      </ul>

      <div className="ccard__footer">
        <Link to={`/contact?course=${encodeURIComponent(name)}`} className="btn btn--primary btn--block">
          Enquire Now <ArrowRight size={17} />
        </Link>
        {slug && (
          <Link to={`/courses/${slug}`} className="ccard__more">
            View details
          </Link>
        )}
      </div>
    </article>
  );
}

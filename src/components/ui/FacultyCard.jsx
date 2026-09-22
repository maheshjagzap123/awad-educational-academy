import { User } from "lucide-react";
import "./Cards.css";

/** Faculty profile card — renders only confirmed fields. */
export default function FacultyCard({ member }) {
  const { name, designation, subject, qualification, experience, bio, photo } = member;

  return (
    <article className="fcard">
      <div className="fcard__photo">
        {photo ? (
          <img src={photo} alt={`${name}${designation ? `, ${designation}` : ""}`} loading="lazy" />
        ) : (
          <span className="fcard__photo-fallback" aria-hidden="true">
            <User size={40} />
          </span>
        )}
      </div>
      <div className="fcard__body">
        {name && <h3 className="fcard__name">{name}</h3>}
        {designation && <p className="fcard__role">{designation}</p>}
        <ul className="fcard__meta">
          {subject && <li>Subject: {subject}</li>}
          {qualification && <li>Qualification: {qualification}</li>}
          {experience && <li>Experience: {experience}</li>}
        </ul>
        {bio && <p className="muted fcard__bio">{bio}</p>}
      </div>
    </article>
  );
}

import { MapPin, Phone, BookOpen, Users } from "lucide-react";
import siteConfig from "../../config/siteConfig";
import "./TrustStrip.css";

const items = [
  { icon: MapPin, title: "Kaij, Beed", sub: "Maharashtra – 431123" },
  { icon: Phone, title: "Easy to Reach", sub: siteConfig.phone },
  { icon: BookOpen, title: "Courses & Classes", sub: "Explore what we offer" },
  { icon: Users, title: "Student-Focused", sub: "Personal guidance" },
];

export default function TrustStrip() {
  return (
    <div className="trust-strip">
      <div className="container trust-strip__grid">
        {items.map((it) => (
          <div key={it.title} className="trust-strip__item">
            <span className="trust-strip__icon">
              <it.icon size={20} />
            </span>
            <div>
              <strong>{it.title}</strong>
              <small>{it.sub}</small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

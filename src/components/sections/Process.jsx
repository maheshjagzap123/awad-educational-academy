import { Link } from "react-router-dom";
import { PhoneCall, CalendarCheck, GraduationCap, ArrowRight } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import "./Process.css";

const steps = [
  {
    icon: PhoneCall,
    title: "Get in Touch",
    text: "Call or send an enquiry to tell us what you'd like to learn.",
  },
  {
    icon: CalendarCheck,
    title: "Visit & Discuss",
    text: "Meet the academy, discuss courses, batch timings and eligibility.",
  },
  {
    icon: GraduationCap,
    title: "Start Learning",
    text: "Join a batch and begin your learning journey with us.",
  },
];

export default function Process() {
  return (
    <section className="section section--soft">
      <div className="container">
        <SectionHeading eyebrow="How to Join" title="Getting Started Is Simple" center />
        <div className="process">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 100} className="process__cell">
              <div className="process__step">
                <span className="process__num">{i + 1}</span>
                <span className="process__icon">
                  <s.icon size={24} />
                </span>
                <h3>{s.title}</h3>
                <p className="muted">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="text-center" style={{ marginTop: 32 }}>
          <Link to="/contact" className="btn btn--primary">
            Start Your Enquiry <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}

import Layout from "../components/layout/Layout";
import PageHero from "../components/ui/PageHero";
import { Users } from "lucide-react";
import FacultyCard from "../components/ui/FacultyCard";
import EmptyState from "../components/ui/EmptyState";
import Reveal from "../components/ui/Reveal";
import useSeo from "../hooks/useSeo";
import { faculty } from "../data/content";
import "./pages.css";

export default function FacultyPage() {
  useSeo({
    title: "Faculty | Awad Educational Academy, Kaij",
    description:
      "Meet the faculty of Awad Educational Academy in Kaij, Beed, Maharashtra.",
    path: "/faculty",
  });

  const confirmed = faculty.filter((f) => f.confirmed !== false);

  return (
    <Layout>
      <PageHero title="Our Faculty" subtitle="The teachers behind Awad Educational Academy." />
      <section className="section">
        <div className="container">
          {confirmed.length ? (
            <div className="grid grid--3">
              {confirmed.map((m, i) => (
                <Reveal key={m.id} delay={i * 80}>
                  <FacultyCard member={m} />
                </Reveal>
              ))}
            </div>
          ) : (
            <EmptyState
              icon={Users}
              title="Faculty Profiles Coming Soon"
              message="Verified profiles of our teachers — names, subjects, qualifications and experience — will be published here soon."
            />
          )}
        </div>
      </section>
    </Layout>
  );
}

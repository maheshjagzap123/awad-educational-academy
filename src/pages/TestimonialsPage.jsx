import { MessageCircle } from "lucide-react";
import Layout from "../components/layout/Layout";
import PageHero from "../components/ui/PageHero";
import EmptyState from "../components/ui/EmptyState";
import Reveal from "../components/ui/Reveal";
import useSeo from "../hooks/useSeo";
import { testimonials } from "../data/content";
import "./pages.css";

export default function TestimonialsPage() {
  useSeo({
    title: "Student & Parent Testimonials | Awad Educational Academy",
    description:
      "Genuine feedback from students and parents of Awad Educational Academy, Kaij, Beed.",
    path: "/testimonials",
  });

  const confirmed = testimonials.filter((t) => t.confirmed !== false);

  return (
    <Layout>
      <PageHero
        title="Testimonials"
        subtitle="What our students and parents say about the academy."
      />
      <section className="section">
        <div className="container">
          {confirmed.length ? (
            <div className="grid grid--2">
              {confirmed.map((t, i) => (
                <Reveal key={t.id} delay={i * 80}>
                  <blockquote className="quote card">
                    <p>“{t.text}”</p>
                    <footer>
                      <strong>{t.name}</strong>
                      {t.role && <span className="muted"> · {t.role}</span>}
                      {t.course && <span className="muted"> · {t.course}</span>}
                    </footer>
                  </blockquote>
                </Reveal>
              ))}
            </div>
          ) : (
            <EmptyState
              icon={MessageCircle}
              title="Real Stories, Coming Soon"
              message="Genuine, academy-approved testimonials from students and parents will be published here. We don't show public review ratings as testimonials."
            />
          )}
        </div>
      </section>
    </Layout>
  );
}

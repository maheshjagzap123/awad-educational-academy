import Layout from "../components/layout/Layout";
import PageHero from "../components/ui/PageHero";
import CourseCard from "../components/ui/CourseCard";
import ComingSoon from "../components/ui/ComingSoon";
import Reveal from "../components/ui/Reveal";
import useSeo from "../hooks/useSeo";
import { courses } from "../data/content";
import "./pages.css";

export default function CoursesPage() {
  useSeo({
    title: "Courses & Classes | Awad Educational Academy, Kaij",
    description:
      "Explore the courses and classes offered by Awad Educational Academy in Kaij, Beed, Maharashtra. Enquire now.",
    path: "/courses",
  });

  const confirmed = courses.filter((c) => c.confirmed);
  const list = confirmed.length ? confirmed : courses;

  return (
    <Layout>
      <PageHero
        title="Courses & Classes"
        subtitle="Find the right course and enquire directly with the academy."
      />
      <section className="section">
        <div className="container">
          {!confirmed.length && (
            <div style={{ marginBottom: 24 }}>
              <ComingSoon message="The official list of courses is being finalised. The cards below are placeholders — contact the academy for current course details." />
            </div>
          )}
          <div className="grid grid--3">
            {list.map((c, i) => (
              <Reveal key={c.id} delay={i * 80}>
                <CourseCard course={c} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

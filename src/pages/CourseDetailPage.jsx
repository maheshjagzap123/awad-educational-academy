import { useParams, Link } from "react-router-dom";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Layout from "../components/layout/Layout";
import PageHero from "../components/ui/PageHero";
import ComingSoon from "../components/ui/ComingSoon";
import useSeo from "../hooks/useSeo";
import { courses } from "../data/content";
import "./pages.css";

export default function CourseDetailPage() {
  const { slug } = useParams();
  const course = courses.find((c) => c.slug === slug);

  useSeo({
    title: `${course ? course.name : "Course"} | Awad Educational Academy`,
    description:
      course?.shortDescription ||
      "Course details at Awad Educational Academy, Kaij, Beed, Maharashtra. Contact the academy to enquire.",
    path: `/courses/${slug}`,
    // Unconfirmed placeholder courses should not be indexed until the
    // academy provides real details; confirmed courses are indexable.
    robots: course?.confirmed ? "index, follow" : "noindex, follow",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Courses", path: "/courses" },
      { name: course ? course.name : "Course", path: `/courses/${slug}` },
    ],
  });

  if (!course) {
    return (
      <Layout>
        <PageHero title="Course Not Found" crumb="Courses" />
        <section className="section">
          <div className="container prose">
            <p className="muted">This course could not be found.</p>
            <Link to="/courses" className="btn btn--primary">
              <ArrowLeft size={17} /> Back to Courses
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  const rows = [
    ["Duration", course.duration],
    ["Batch Timing", course.batchTiming],
    ["Mode", course.mode],
    ["Eligibility", course.eligibility],
    ["Admission", course.admission],
  ].filter(([, v]) => v);

  return (
    <Layout>
      <PageHero title={course.name} subtitle={course.shortDescription} crumb="Courses" />
      <section className="section">
        <div className="container prose">
          {!course.confirmed && (
            <div style={{ marginBottom: 20 }}>
              <ComingSoon message="Full details for this course will be published once confirmed by the academy." />
            </div>
          )}

          {course.subjects?.length > 0 && (
            <>
              <h2>Subjects</h2>
              <ul>
                {course.subjects.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </>
          )}

          {rows.length > 0 && (
            <>
              <h2>Course Information</h2>
              <table className="result-table">
                <tbody>
                  {rows.map(([k, v]) => (
                    <tr key={k}>
                      <th style={{ width: "40%" }}>{k}</th>
                      <td>{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )}

          <div style={{ marginTop: 28, display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link to={`/contact?course=${encodeURIComponent(course.name)}`} className="btn btn--primary">
              Enquire Now <ArrowRight size={17} />
            </Link>
            <Link to="/courses" className="btn btn--outline">
              <ArrowLeft size={17} /> All Courses
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}

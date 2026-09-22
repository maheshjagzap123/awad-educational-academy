import { Award, Trophy, Medal } from "lucide-react";
import Layout from "../components/layout/Layout";
import PageHero from "../components/ui/PageHero";
import SectionHeading from "../components/ui/SectionHeading";
import EmptyState from "../components/ui/EmptyState";
import useSeo from "../hooks/useSeo";
import { academicResults, studentAchievements, academyAchievements } from "../data/content";
import "./pages.css";

export default function ResultsPage() {
  useSeo({
    title: "Results & Achievements | Awad Educational Academy",
    description:
      "Verified academic results and achievements of students at Awad Educational Academy, Kaij, Beed.",
    path: "/results",
  });

  return (
    <Layout>
      <PageHero
        title="Results & Achievements"
        subtitle="Verified academic results and achievements of our students."
      />
      <section className="section">
        <div className="container">
          <SectionHeading title="Academic Results" />
          {academicResults.length ? (
            <table className="result-table">
              <thead>
                <tr>
                  <th>Exam</th>
                  <th>Year</th>
                  <th>Student</th>
                  <th>Result</th>
                  <th>Rank</th>
                </tr>
              </thead>
              <tbody>
                {academicResults.map((r, i) => (
                  <tr key={i}>
                    <td>{r.exam}</td>
                    <td>{r.year}</td>
                    <td>{r.student}</td>
                    <td>{r.result}</td>
                    <td>{r.rank}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <EmptyState
              icon={Award}
              title="Results Coming Soon"
              message="Verified academic results will be published here once shared by the academy."
              showCta={false}
            />
          )}
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <SectionHeading title="Student Achievements" />
          {studentAchievements.length ? (
            <div className="grid grid--3">
              {studentAchievements.map((a, i) => (
                <div key={i} className="card">
                  <strong>{a.title}</strong>
                  {a.detail && <p className="muted" style={{ margin: "6px 0 0" }}>{a.detail}</p>}
                </div>
              ))}
            </div>
          ) : (
            <EmptyState
              icon={Trophy}
              title="Achievements Coming Soon"
              message="Student achievements such as competitions, awards, certifications and selections will be added here."
              showCta={false}
            />
          )}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading title="Academy Achievements" />
          {academyAchievements.length ? (
            <div className="grid grid--3">
              {academyAchievements.map((a, i) => (
                <div key={i} className="card">
                  <strong>{a.title}</strong>
                  {a.detail && <p className="muted" style={{ margin: "6px 0 0" }}>{a.detail}</p>}
                </div>
              ))}
            </div>
          ) : (
            <EmptyState
              icon={Medal}
              title="Milestones Coming Soon"
              message="Academy recognitions, awards, events and milestones will be added here."
              showCta={false}
            />
          )}
        </div>
      </section>
    </Layout>
  );
}

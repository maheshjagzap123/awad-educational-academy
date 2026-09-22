import { Link } from "react-router-dom";
import { Home, BookOpen, MessageCircle } from "lucide-react";
import Layout from "../components/layout/Layout";
import useSeo from "../hooks/useSeo";
import "./pages.css";

export default function NotFoundPage() {
  useSeo({
    title: "Page Not Found | Awad Educational Academy",
    description:
      "The page you are looking for could not be found. Return to the Awad Educational Academy home page or explore our courses.",
    path: "/404",
    robots: "noindex, follow",
  });

  return (
    <Layout>
      <section className="section" style={{ minHeight: "50vh", display: "grid", placeItems: "center" }}>
        <div className="container text-center">
          <p className="pill" style={{ marginBottom: 12 }}>404</p>
          <h1>Page Not Found</h1>
          <p className="muted" style={{ maxWidth: 440, margin: "0 auto 24px" }}>
            The page you are looking for doesn't exist or may have moved. Try one of the links
            below.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
            <Link to="/" className="btn btn--primary">
              <Home size={18} /> Go Home
            </Link>
            <Link to="/courses" className="btn btn--outline">
              <BookOpen size={18} /> View Courses
            </Link>
            <Link to="/contact" className="btn btn--ghost">
              <MessageCircle size={18} /> Contact Us
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}

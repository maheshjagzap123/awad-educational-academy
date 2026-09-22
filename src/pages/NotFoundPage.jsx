import { Link } from "react-router-dom";
import { Home } from "lucide-react";
import Layout from "../components/layout/Layout";
import useSeo from "../hooks/useSeo";
import "./pages.css";

export default function NotFoundPage() {
  useSeo({ title: "Page Not Found | Awad Educational Academy", path: "/404" });

  return (
    <Layout>
      <section className="section" style={{ minHeight: "50vh", display: "grid", placeItems: "center" }}>
        <div className="container text-center">
          <p className="pill" style={{ marginBottom: 12 }}>404</p>
          <h1>Page Not Found</h1>
          <p className="muted" style={{ maxWidth: 440, margin: "0 auto 24px" }}>
            The page you are looking for doesn't exist or may have moved.
          </p>
          <Link to="/" className="btn btn--primary">
            <Home size={18} /> Back to Home
          </Link>
        </div>
      </section>
    </Layout>
  );
}

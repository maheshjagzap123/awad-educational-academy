import { useState } from "react";
import { Link } from "react-router-dom";
import { Image as ImageIcon, ArrowRight } from "lucide-react";
import Layout from "../components/layout/Layout";
import PageHero from "../components/ui/PageHero";
import EmptyState from "../components/ui/EmptyState";
import useSeo from "../hooks/useSeo";
import { galleryImages, galleryCategories } from "../data/content";
import "./pages.css";

export default function GalleryPage() {
  useSeo({
    title: "Gallery | Awad Educational Academy, Kaij",
    description:
      "Photographs of Awad Educational Academy — the campus, classrooms, students, events and activities in Kaij, Beed, Maharashtra.",
    path: "/gallery",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Gallery", path: "/gallery" },
    ],
  });

  const [filter, setFilter] = useState("All");
  const shown =
    filter === "All" ? galleryImages : galleryImages.filter((img) => img.category === filter);

  return (
    <Layout>
      <PageHero title="Gallery" subtitle="A glimpse of life at Awad Educational Academy." />
      <section className="section">
        <div className="container">
          {galleryImages.length ? (
            <>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 22 }}>
                {["All", ...galleryCategories].map((cat) => (
                  <button
                    key={cat}
                    className={`btn ${filter === cat ? "btn--primary" : "btn--ghost"}`}
                    style={{ minHeight: 40, padding: "8px 16px" }}
                    onClick={() => setFilter(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
              <div className="gallery-grid">
                {shown.map((img, i) => (
                  <img
                    key={i}
                    src={img.src}
                    alt={
                      img.alt ||
                      `Awad Educational Academy${img.category ? ` — ${img.category}` : ""}, Kaij, Beed`
                    }
                    width="1600"
                    height="1066"
                    loading="lazy"
                    decoding="async"
                  />
                ))}
              </div>
            </>
          ) : (
            <EmptyState
              icon={ImageIcon}
              title="Photos Coming Soon"
              message="Real photographs of the academy, classrooms, students, events and activities will be added here soon."
            />
          )}
          <div className="text-center" style={{ marginTop: 32 }}>
            <Link to="/about" className="btn btn--outline">
              Learn More About the Academy <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}

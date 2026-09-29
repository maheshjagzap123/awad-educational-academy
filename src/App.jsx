import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CoursesPage from "./pages/CoursesPage";
import CourseDetailPage from "./pages/CourseDetailPage";
import FacultyPage from "./pages/FacultyPage";
import ResultsPage from "./pages/ResultsPage";
import GalleryPage from "./pages/GalleryPage";
import TestimonialsPage from "./pages/TestimonialsPage";
import FaqPage from "./pages/FaqPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";

/**
 * App route tree WITHOUT a router.
 *
 * The router is supplied by the entry point so the same tree can be
 * rendered on the client (BrowserRouter, src/main.jsx) and prerendered
 * at build time (StaticRouter, scripts/prerender.mjs). Keeping the
 * router out of here is what makes crawlable static HTML possible.
 */
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/courses" element={<CoursesPage />} />
      <Route path="/courses/:slug" element={<CourseDetailPage />} />
      <Route path="/faculty" element={<FacultyPage />} />
      <Route path="/results" element={<ResultsPage />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/testimonials" element={<TestimonialsPage />} />
      <Route path="/faq" element={<FaqPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

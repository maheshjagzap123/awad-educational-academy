import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import MobileCTA from "../ui/MobileCTA";
import { initAnalytics, trackPageView, trackEvent } from "../../lib/analytics";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  }, [pathname]);
  return null;
}

/**
 * Initialises GA4 once (if a Measurement ID is configured) and records
 * a page_view on every client-side route change. Completely inert when
 * VITE_GA_MEASUREMENT_ID is unset.
 */
function Analytics() {
  const { pathname, search } = useLocation();
  useEffect(() => {
    initAnalytics();
  }, []);
  useEffect(() => {
    trackPageView(`${pathname}${search}`);
  }, [pathname, search]);

  // Delegated click tracking so we don't have to wire every CTA by hand.
  // Fires phone_click / whatsapp_click / map_click based on the link the
  // user activated. Inert when analytics is disabled (trackEvent no-ops).
  useEffect(() => {
    const onClick = (e) => {
      const link = e.target.closest && e.target.closest("a[href]");
      if (!link) return;
      const href = link.getAttribute("href") || "";
      if (href.startsWith("tel:")) {
        trackEvent("phone_click", { location: pathname });
      } else if (/(?:wa\.me|api\.whatsapp\.com|whatsapp:)/i.test(href)) {
        trackEvent("whatsapp_click", { location: pathname });
      } else if (/google\.[^/]+\/maps/i.test(href)) {
        trackEvent("map_click", { location: pathname });
      }
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [pathname]);

  return null;
}

export default function Layout({ children }) {
  return (
    <>
      <ScrollToTop />
      <Analytics />
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <Navbar />
      <main id="main" tabIndex={-1}>
        {children}
      </main>
      <Footer />
      <MobileCTA />
    </>
  );
}

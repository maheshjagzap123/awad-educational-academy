import { Link } from "react-router-dom";
import { galleryImages } from "../../data/content";
import "./PhotoMarquee.css";

/**
 * Premium infinite auto-scrolling photo strip.
 *
 * - Two rows scrolling in opposite directions for depth.
 * - The image set is duplicated inline so the CSS animation can
 *   loop seamlessly (translateX(-50%) lands exactly on the copy).
 * - Pauses on hover/focus and fully respects prefers-reduced-motion
 *   (handled in the CSS).
 */
export default function PhotoMarquee({
  images = galleryImages,
  title = "Life at the Academy",
  eyebrow = "Gallery",
  subtitle = "A look at our classrooms, sessions and students.",
}) {
  if (!images.length) return null;

  // Split into two rows for a layered look; fall back to one row if few images.
  const mid = Math.ceil(images.length / 2);
  const rowA = images.length > 5 ? images.slice(0, mid) : images;
  const rowB = images.length > 5 ? images.slice(mid) : images;

  const renderRow = (rowImages, dir) => (
    <div className={`marquee__row marquee__row--${dir}`}>
      {/* Duplicate the set twice for a seamless loop */}
      {[...rowImages, ...rowImages].map((img, i) => {
        const isDup = i >= rowImages.length;
        return (
          <Link
            to="/gallery"
            key={`${img.src}-${i}`}
            className={`marquee__item${isDup ? " marquee__item--dup" : ""}`}
            aria-label={isDup ? undefined : img.alt}
            aria-hidden={isDup || undefined}
            tabIndex={isDup ? -1 : 0}
          >
            <img
              src={img.src}
              alt={isDup ? "" : img.alt}
              width="1600"
              height="1066"
              loading="lazy"
              decoding="async"
            />
          </Link>
        );
      })}
    </div>
  );

  return (
    <section className="section marquee-section">
      <div className="container marquee__head">
        <span className="pill">{eyebrow}</span>
        <h2 className="marquee__title">{title}</h2>
        {subtitle && <p className="muted marquee__subtitle">{subtitle}</p>}
      </div>

      <div className="marquee" role="group" aria-label="Photos of Awad Educational Academy">
        {renderRow(rowA, "left")}
        {rowB.length ? renderRow(rowB, "right") : null}
      </div>

      <div className="container text-center" style={{ marginTop: 28 }}>
        <Link to="/gallery" className="btn btn--primary">
          View Full Gallery
        </Link>
      </div>
    </section>
  );
}

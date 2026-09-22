import { Info } from "lucide-react";

/**
 * Friendly placeholder shown wherever content is awaiting confirmation
 * from the academy. Keeps the layout intact without publishing any
 * fabricated information (see WEBSITE-SPECIFICATION.md §23).
 */
export default function ComingSoon({ message }) {
  return (
    <div className="tbp-note" role="note" style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
      <Info size={20} style={{ flexShrink: 0, marginTop: 2 }} />
      <span>
        {message ||
          "This information will be published soon. Please contact the academy for current details."}
      </span>
    </div>
  );
}

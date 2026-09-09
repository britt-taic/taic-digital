const VARIANTS = {
  mist: { background: "var(--mist-2)", color: "var(--slate)" },
  navy: { background: "var(--navy)", color: "rgba(250,247,242,0.72)" },
  "navy-2": { background: "var(--navy-2)", color: "rgba(250,247,242,0.5)" },
  "navy-3": { background: "var(--navy-3)", color: "rgba(250,247,242,0.5)" },
};

/**
 * Honest placeholder for an image slot — no photography/graphics exist yet.
 * Swap for a real <img> / background-image once assets are ready.
 */
export default function Placeholder({
  label,
  variant = "mist",
  shape = "rect",
  style,
}) {
  const colors = VARIANTS[variant] || VARIANTS.mist;
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "8px",
        borderRadius: shape === "circle" ? "50%" : 0,
        background: colors.background,
        color: colors.color,
        fontSize: 11,
        fontWeight: 500,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        ...style,
      }}
    >
      {label}
    </div>
  );
}

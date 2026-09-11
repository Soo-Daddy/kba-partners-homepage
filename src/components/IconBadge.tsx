type Kind = "growth" | "partnership" | "compass" | "stairs";

const PATHS: Record<Kind, React.ReactNode> = {
  growth: (
    <>
      <rect x="30" y="58" width="10" height="22" rx="1.5" fill="white" />
      <rect x="46" y="46" width="10" height="34" rx="1.5" fill="white" />
      <rect x="62" y="34" width="10" height="46" rx="1.5" fill="white" />
      <path
        d="M30 44 L46 34 L60 40 L74 26"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path d="M66 26 H74 V34" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </>
  ),
  partnership: (
    <>
      <circle cx="42" cy="38" r="9" stroke="white" strokeWidth="3" fill="none" />
      <circle cx="66" cy="38" r="9" stroke="white" strokeWidth="3" fill="none" />
      <path
        d="M28 78 C28 64, 36 57, 42 57 C48 57, 52 61, 54 65"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M80 78 C80 64, 72 57, 66 57 C60 57, 56 61, 54 65"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
    </>
  ),
  compass: (
    <>
      <circle cx="54" cy="54" r="24" stroke="white" strokeWidth="3" fill="none" />
      <path d="M62 44 L57 57 L46 64 L51 51 Z" fill="white" />
      <circle cx="54" cy="54" r="2.4" fill="white" />
    </>
  ),
  stairs: (
    <>
      <rect x="28" y="66" width="16" height="14" fill="white" />
      <rect x="44" y="52" width="16" height="28" fill="white" />
      <rect x="60" y="38" width="16" height="42" fill="white" />
      <path d="M76 38 L82 32" stroke="white" strokeWidth="3" strokeLinecap="round" />
      <path d="M76 26 H82 V32" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </>
  ),
};

export default function IconBadge({
  kind,
  tone = "navy",
  className,
}: {
  kind: Kind;
  tone?: "navy" | "gold";
  className?: string;
}) {
  return (
    <svg viewBox="0 0 108 108" className={className} aria-hidden>
      <circle
        cx="54"
        cy="54"
        r="54"
        fill={tone === "gold" ? "#b6893f" : "#0a1330"}
      />
      {PATHS[kind]}
    </svg>
  );
}

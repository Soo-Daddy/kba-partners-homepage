type Kind = "partnership" | "stairs" | "shield";

const PATHS: Record<Kind, React.ReactNode> = {
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
  stairs: (
    <>
      <rect x="28" y="66" width="16" height="14" fill="white" />
      <rect x="44" y="52" width="16" height="28" fill="white" />
      <rect x="60" y="38" width="16" height="42" fill="white" />
      <path d="M76 38 L82 32" stroke="white" strokeWidth="3" strokeLinecap="round" />
      <path d="M76 26 H82 V32" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </>
  ),
  shield: (
    <>
      <path
        d="M54 26 L77 35 V52 C77 66 67 75 54 81 C41 75 31 66 31 52 V35 Z"
        fill="none"
        stroke="white"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M44 54 L51 61 L65 46"
        fill="none"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
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

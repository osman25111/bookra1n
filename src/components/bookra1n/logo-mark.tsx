/**
 * BR Team brand mark — teardrop + keyhole, gold gradient.
 * Self-contained SVG (safe to reuse multiple times on a page).
 */
export default function LogoMark({ size = 26 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="bk-gold-grad" x1="9" y1="3" x2="39" y2="45" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#F1C583" />
          <stop offset="1" stopColor="#C97F35" />
        </linearGradient>
      </defs>
      <path
        d="M24 3C24 3 9 20.2 9 30a15 15 0 0 0 30 0C39 20.2 24 3 24 3Z"
        stroke="url(#bk-gold-grad)"
        strokeWidth="2.6"
        strokeLinejoin="round"
      />
      <circle cx="24" cy="26.6" r="4.4" fill="url(#bk-gold-grad)" />
      <path d="M24 30.2 21.2 38h5.6L24 30.2Z" fill="url(#bk-gold-grad)" />
    </svg>
  );
}

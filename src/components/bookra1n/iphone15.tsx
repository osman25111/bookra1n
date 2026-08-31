import Image from "next/image";

/**
 * iPhone 15 Pro Max — Hello mode (iOS activation screen).
 * Titanium-band body, Dynamic Island, Action Button, real "hello" signature.
 * Pure CSS + one tiny animated SVG — no JS, transform/opacity animations only.
 */
export default function Iphone15() {
  return (
    <div className="stage">
      <div className="iphone">
        <span className="ibtn action" aria-hidden="true" />
        <span className="ibtn vol-up" aria-hidden="true" />
        <span className="ibtn vol-dn" aria-hidden="true" />
        <span className="ibtn power" aria-hidden="true" />
        <div className="iphone-bezel" aria-hidden="true" />
        <div className="iphone-screen" role="img" aria-label="iPhone 15 Pro Max showing the iOS Hello activation screen">
          <div className="island" aria-hidden="true" />
          <div className="istatus" aria-hidden="true">
            <span>09:41</span>
            <span style={{ display: "flex", gap: 6, alignItems: "center" }}>
              {/* signal */}
              <svg width="17" height="11" viewBox="0 0 17 11" fill="#fff">
                <rect x="0" y="7" width="3" height="4" rx="1" />
                <rect x="4.5" y="5" width="3" height="6" rx="1" />
                <rect x="9" y="2.5" width="3" height="8.5" rx="1" />
                <rect x="13.5" y="0" width="3" height="11" rx="1" />
              </svg>
              {/* wifi */}
              <svg width="16" height="11" viewBox="0 0 16 11" fill="#fff">
                <path d="M8 9.6a1.4 1.4 0 1 0 0 1.4 1.4 1.4 0 0 0 0-1.4Z" transform="translate(0 -0.3)" />
                <path d="M8 6.2c1.5 0 2.9.6 3.9 1.6l-1.2 1.2a3.9 3.9 0 0 0-5.4 0L4.1 7.8A5.5 5.5 0 0 1 8 6.2Z" />
                <path d="M8 2.6c2.5 0 4.8 1 6.5 2.7l-1.2 1.2A7.5 7.5 0 0 0 8 4.4c-2.1 0-4 .8-5.3 2.1L1.5 5.3A9.2 9.2 0 0 1 8 2.6Z" />
              </svg>
              {/* battery */}
              <svg width="25" height="12" viewBox="0 0 25 12" fill="none">
                <rect x="0.5" y="0.5" width="21" height="11" rx="3.5" stroke="rgba(255,255,255,.5)" />
                <rect x="2" y="2" width="18" height="8" rx="2" fill="#fff" />
                <path d="M23 4v4c1-.2 1.7-1 1.7-2S24 4.2 23 4Z" fill="rgba(255,255,255,.5)" />
              </svg>
            </span>
          </div>
          <div className="hello-wrap">
            <Image
              src="/hello.svg"
              alt="hello"
              width={300}
              height={169}
              priority
              fetchPriority="high"
              unoptimized
            />
          </div>
          <div className="swipe" aria-hidden="true">
            <span>swipe up to open</span>
            <span className="home-bar" />
          </div>
        </div>
      </div>
      <span className="stage-cap">iPhone 15 Pro Max · Hello mode</span>
      <span className="stage-badge">
        100% offline · <b>no jailbreak</b>
      </span>
    </div>
  );
}

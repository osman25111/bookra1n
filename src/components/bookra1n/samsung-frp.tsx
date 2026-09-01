import { asset } from "./asset";

/**
 * Samsung Galaxy — startup setup wizard right after factory reset.
 * Real Google FRP "Verify your account" screen (from the sourced photo),
 * inside a One UI-style body with punch-hole camera.
 */
export default function SamsungFrp() {
  return (
    <div className="stage" style={{ alignItems: "center" }}>
      <div className="samsung">
        <div className="samsung-screen" role="img" aria-label="Samsung Galaxy showing the Google Verify your account FRP screen during startup setup after factory reset">
          { }
          <img
            src={asset("/frp-verify.webp")}
            alt="Google FRP — Verify your account screen after factory reset"
            width={294}
            height={584}
            loading="lazy"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
          />
        </div>
        <span className="punch" aria-hidden="true" />
        <div className="sstatus" aria-hidden="true">
          <span>09:00</span>
          <span style={{ display: "flex", gap: 5, alignItems: "center" }}>
            <svg width="13" height="9" viewBox="0 0 13 9" fill="#fff">
              <rect x="0" y="6" width="2.4" height="3" rx="0.8" />
              <rect x="3.5" y="4" width="2.4" height="5" rx="0.8" />
              <rect x="7" y="2" width="2.4" height="7" rx="0.8" />
              <rect x="10.5" y="0" width="2.4" height="9" rx="0.8" />
            </svg>
            <svg width="17" height="9" viewBox="0 0 17 9" fill="none">
              <rect x="0.5" y="0.5" width="13" height="8" rx="2" stroke="rgba(255,255,255,.6)" />
              <rect x="2" y="2" width="10" height="5" rx="1" fill="#fff" />
              <path d="M15 3v3c.8-.2 1.3-.8 1.3-1.5S15.8 3.2 15 3Z" fill="rgba(255,255,255,.6)" />
            </svg>
          </span>
        </div>
      </div>
      <div className="sam-cap">
        <b>Startup setup — right after factory reset</b>
        <span>Google FRP · Verify your account</span>
      </div>
    </div>
  );
}

import { asset } from "@/components/bookra1n/asset";
import Nav from "@/components/bookra1n/nav";
import Reveal from "@/components/bookra1n/reveal";
import Counter from "@/components/bookra1n/counter";
import Iphone15 from "@/components/bookra1n/iphone15";
import SamsungFrp from "@/components/bookra1n/samsung-frp";
import FooterClock from "@/components/bookra1n/footer-clock";
import LogoMark from "@/components/bookra1n/logo-mark";
import {
  IconArrow,
  IconTelegram,
  IconDownload,
  IconGlobe,
  IconLayers,
  IconChip,
  IconEyeOff,
  IconTerminal,
  IconArchive,
  IconSliders,
  IconLock,
  IconLockDot,
  IconRefresh,
  IconShieldX,
  IconRamdisk,
  IconAndroid,
  IconEraser,
  IconBan,
} from "@/components/bookra1n/icons";

const TOOLS = [
  {
    href: "https://bookra1n.com/panel",
    title: "Web Panel",
    desc: "Serial management, client accounts, wallet balances — your command center.",
    icon: <IconGlobe />,
  },
  {
    href: "https://t.me/Bookra1n",
    title: "Telegram Channel",
    desc: "Releases, guides, support and discussion from the community.",
    icon: <IconTelegram />,
  },
  {
    href: "https://bookra1n.com/Blue/aio/",
    title: "BR Team AiO",
    desc: "All-in-one iOS toolkit: Hello & MDM bypass, ramdisk bypass, Purple Mode.",
    icon: <IconLayers />,
  },
  {
    href: "https://bookra1n.com/Blue/a12a13erase/ramdisk.html",
    title: "A12 — A13 Ramdisk",
    desc: "Ramdisk PIN & Hello bypass for A12/A13. No S/N change. PWNED DFU extraction.",
    icon: <IconRamdisk />,
  },
  {
    href: "https://bookra1n.com/a12/updates/Bookra1n.zip",
    title: "Bookra1n A12+",
    desc: "Untethered Hello activation for A5 — A12+. No jailbreak required.",
    icon: <IconChip />,
  },
  {
    href: "http://bookra1n.com/Blue/android",
    title: "Android AiO",
    desc: "All-in-one Android FRP bypass — 500+ models, Samsung to Tecno.",
    icon: <IconAndroid />,
  },
  {
    href: "http://bookra1n.com/Blue/a12a13erase",
    title: "A12 — A13 Passcode Eraser",
    desc: "Erase any A12 — A13 from passcode to Hello screen. Requires RP2350-USB-A.",
    icon: <IconEraser />,
  },
  {
    href: "http://bookra1n.com/Blue/hidden/hidden.exe",
    title: "Hidden iCloud",
    desc: "Hide iCloud on Open Menu A12+ devices, iOS 17 — 26.2 beta. Deprecated.",
    icon: <IconEyeOff />,
  },
  {
    href: "http://bookra1n.com/Blue/legacydownloads/checkm8.zip",
    title: "CheckM8 Activator",
    desc: "Classic CheckM8 Hello activator for A9 — A11. Untethered & offline.",
    icon: <IconTerminal />,
  },
  {
    href: "http://bookra1n.com/Blue/fakereset",
    title: "Block OTA + Fake Reset",
    desc: "Permanently disable OTA updates and block factory reset. Deprecated.",
    icon: <IconBan />,
  },
  {
    href: "http://bookra1n.com/Blue/legacydownloads",
    title: "Legacy Downloads",
    desc: "Old projects, kept alive for education & research.",
    icon: <IconArchive />,
  },
  {
    href: "https://bookra1n.com/Blue/A12Ultra/patcherbot.php",
    title: "MobileGestalt Patcher",
    desc: "Extract MobileGestalt for unsupported devices, unlock AiO support.",
    icon: <IconSliders />,
  },
  {
    href: "https://bookra1n.com/Blue/fmi2026",
    title: "FMI OFF 2026",
    desc: "Latest FMI OFF portal for all Open Menu iOS 13 — 27 devices.",
    icon: <IconLock />,
  },
  {
    href: "https://bookra1n.com/Blue/fmi",
    title: "FMI OFF 2025",
    desc: "2025 FMI OFF portal for Open Menu iOS 13 — 26.1 devices.",
    icon: <IconLockDot />,
  },
  {
    href: "https://bookra1n.com/Blue/iOS12",
    title: "iOS 12 Re-Jailbreak",
    desc: "WebKit-based re-jailbreak for iOS 12 on A7 — A10 devices.",
    icon: <IconRefresh />,
  },
  {
    href: "https://bookra1n.com/Blue/otablock",
    title: "OTA Blocker",
    desc: "Kill iOS OTA updates with one custom profile.",
    icon: <IconShieldX />,
  },
];

export default function Home() {
  return (
    <div className="bk" id="top">
      <a className="skip" href="#main">
        Skip to content
      </a>

      <Nav />

      <main id="main" style={{ flexGrow: 1 }}>
        {/* ================= HERO ================= */}
        <section className="hero">
          <div className="hero-bg" aria-hidden="true" />
          <div className="hero-scans" aria-hidden="true" />
          <div className="bwrap hero-in">
            <div>
              <div className="hero-ver">v2.6 — 2026 build</div>
              <h1 className="h1">
                <span>iOS & FRP</span>
                <span className="ol">Unlocking</span>
                <span className="g">Tools</span>
              </h1>
              <p className="lede">
                Samsung Qualcomm FRP for <b>200+ models</b>. iOS Hello bypass, MDM, FMI OFF — 
                built by repair techs who actually use this stuff daily.
              </p>
              <div className="acts">
                <a
                  className="btn btn-p"
                  href="https://t.me/Bookra1n"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconTelegram />
                  Join Telegram
                </a>
                <a className="btn btn-g" href="#dls">
                  Browse tools
                </a>
              </div>
              <ul className="hmeta">
                <li>
                  <b>A5 — A12+</b>
                  <span>chip support</span>
                </li>
                <li>
                  <b>iOS 12 — 26</b>
                  <span>versions covered</span>
                </li>
                <li>
                  <b>200+</b>
                  <span>Samsung models</span>
                </li>
              </ul>
            </div>
            <Reveal delay={100}>
              <Iphone15 />
            </Reveal>
          </div>
        </section>

        {/* ================= STATS ================= */}
        <div className="stats">
          <div className="bwrap stats-in">
            {[
              { n: 200, suffix: "+", label: "Samsung models" },
              { n: 16, suffix: "", label: "Tools shipped" },
              { n: 100, suffix: "%", label: "Offline capable" },
              { n: 0, suffix: "", label: "Cloud dependency" },
            ].map((s, i) => (
              <Reveal key={s.label} delay={i * 60}>
                <div className="stat">
                  <span className="stat-n">
                    <Counter to={s.n} />
                    <em>{s.suffix}</em>
                  </span>
                  <span className="stat-l">{s.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* ================= DOWNLOADS ================= */}
        <section id="dls" className="sec">
          <div className="bwrap">
            <Reveal>
              <header className="sec-head">
                <div>
                  <div className="sec-num">Core Downloads</div>
                  <h2 className="sec-t">
                    Flagship <span className="g">Releases</span>
                  </h2>
                  <p className="sec-s">
                    The main builds — straight from the source. No mirrors, no rebuilds, no middlemen.
                  </p>
                </div>
                <a
                  className="sec-link"
                  href="http://bookra1n.com/Blue/legacydownloads"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Legacy archive
                  <IconArrow />
                </a>
              </header>
            </Reveal>

            <div className="dl-grid">
              <Reveal>
                <a
                  className="dl-card"
                  href="https://bookra1n.com/Blue/aio"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <figure>
                    <img
                      src={asset("/poster1.webp")}
                      alt="BR Team AiO poster"
                      width={1200}
                      height={581}
                      loading="lazy"
                      decoding="async"
                      style={{ width: "100%", height: "auto" }}
                    />
                    <span className="dl-tag">Flagship</span>
                  </figure>
                  <div className="dl-body">
                    <div>
                      <h3>BR Team AiO</h3>
                      <p>
                        The all-in-one iOS toolkit — Hello &amp; MDM bypass, ramdisk bypass, Purple Mode
                        and everything in between.
                      </p>
                      <div className="dl-meta">
                        <span className="chip2">Windows</span>
                        <span className="chip2">All-in-one</span>
                      </div>
                    </div>
                    <span className="dl-go" aria-hidden="true">
                      <IconArrow />
                    </span>
                  </div>
                </a>
              </Reveal>
              <div className="dl-col">
                <Reveal delay={100}>
                  <a
                    className="dl-card"
                    href="https://bookra1n.com/a12/updates/Bookra1n.zip"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <figure>
                      <img
                        src={asset("/poster2.webp")}
                        alt="Bookra1n A12+ poster"
                        width={1000}
                        height={483}
                        loading="lazy"
                        decoding="async"
                        style={{ width: "100%", height: "auto" }}
                      />
                      <span className="dl-tag">A12+</span>
                    </figure>
                    <div className="dl-body">
                      <div>
                        <h3>Bookra1n A12+</h3>
                        <p>Untethered Hello activation for A5 — A12+. No jailbreak required.</p>
                        <div className="dl-meta">
                          <span className="chip2">.zip</span>
                          <span className="chip2">Offline</span>
                        </div>
                      </div>
                      <span className="dl-go" aria-hidden="true">
                        <IconArrow />
                      </span>
                    </div>
                  </a>
                </Reveal>
                <Reveal delay={180}>
                  <a
                    className="dl-card"
                    href="https://bookra1n.com/Blue/fmi"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <figure>
                      <img
                        src={asset("/poster4.webp")}
                        alt="FMI OFF portal poster"
                        width={1000}
                        height={483}
                        loading="lazy"
                        decoding="async"
                        style={{ width: "100%", height: "auto" }}
                      />
                      <span className="dl-tag">Portal</span>
                    </figure>
                    <div className="dl-body">
                      <div>
                        <h3>FMI OFF Portal</h3>
                        <p>iCloud unlock for all Open Menu iOS devices.</p>
                        <div className="dl-meta">
                          <span className="chip2">Open menu</span>
                          <span className="chip2">iCloud</span>
                        </div>
                      </div>
                      <span className="dl-go" aria-hidden="true">
                        <IconArrow />
                      </span>
                    </div>
                  </a>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ================= FRP ================= */}
        <section id="frp" className="sec frp">
          <div className="bwrap frp-grid">
            <Reveal>
              <div>
                <span className="frp-label">In development</span>
                <h2 className="sec-t" style={{ marginTop: 16 }}>
                  BR TEAM <span className="hl">FRP</span>
                </h2>
                <p className="frp-p">
                  Samsung Qualcomm FRP removal for <b>200+ models</b>. Factory reset &amp; FRP
                  remove — one tool, zero drama. Release announcements land on Telegram first.
                </p>
                <ul className="chips">
                  <li>Factory reset</li>
                  <li>FRP remove</li>
                  <li>Qualcomm</li>
                  <li>Android 12 — 16</li>
                </ul>
                <div className="frp-cta">
                  <a
                    className="btn dark"
                    href="https://t.me/Bookra1n"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get notified on Telegram
                  </a>
                  <span className="frp-note">first drop → TG channel</span>
                </div>
                <div className="prog">
                  <div className="prog-head">
                    <span>Build progress</span>
                    <span>
                      <b>87</b>
                      <i>%</i>
                    </span>
                  </div>
                  <div className="prog-bar">
                    <i />
                  </div>
                  <div className="prog-steps">
                    <span className="done">Core engine</span>
                    <span className="done">Model database · 200+</span>
                    <span className="now">UI hardening</span>
                    <span>Public beta</span>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <SamsungFrp />
            </Reveal>
          </div>
        </section>

        {/* ================= TOOLS ================= */}
        <section id="tools" className="sec">
          <div className="bwrap">
            <Reveal>
              <header className="sec-head">
                <div>
                  <div className="sec-num">Full Toolkit</div>
                  <h2 className="sec-t">
                    Everything <span className="g">We Build</span>
                  </h2>
                  <p className="sec-s">
                    Every tool in the BR Team ecosystem. Battle-tested, updated when it matters.
                  </p>
                </div>
                <a
                  className="sec-link"
                  href="https://bookra1n.com/panel"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Web panel
                  <IconArrow />
                </a>
              </header>
            </Reveal>
            <div className="tools-list">
              {TOOLS.map((t, i) => (
                <Reveal key={t.title} delay={(i % 4) * 40}>
                  <a className="tool-row" href={t.href} target="_blank" rel="noopener noreferrer">
                    <span className="t-ic">{t.icon}</span>
                    <h3>{t.title}</h3>
                    <p>{t.desc}</p>
                    <span className="t-arr" aria-hidden="true">
                      <IconArrow />
                    </span>
                  </a>
                </Reveal>
              ))}
              <Reveal delay={160}>
                <div className="tool-ghost">
                  <span className="ghost-plus">+</span>
                  <span className="ghost-t">More shipping soon</span>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section id="start" className="cta">
          <div className="bwrap">
            <Reveal>
              <p className="cta-kick">// get started</p>
              <h2 className="cta-t">
                Grab the <span className="ol-g">tools</span>
              </h2>
              <p className="cta-s">
                Thousands of repair shops already run BR Team builds daily. 
                Grab the latest AiO or jump in on Telegram.
              </p>
              <div className="acts center">
                <a
                  className="btn btn-p"
                  href="https://bookra1n.com/Blue/aio"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconDownload />
                  Download BR Team AiO
                </a>
                <a
                  className="btn btn-g"
                  href="https://t.me/Bookra1n"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconTelegram />
                  Telegram channel
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="foot">
        <div className="bwrap">
          <div className="foot-top">
            <div className="foot-brand">
              <LogoMark size={30} />
              <div>
                <b>
                  BOOKRA<span className="g">1</span>N
                </b>
                <p>
                  iOS &amp; FRP tools built by repair techs, for repair techs. 
                  No clouds, no subscriptions — just tools that work.
                </p>
              </div>
            </div>
            <div className="foot-cols">
              <div className="fcol">
                <h4>Tools</h4>
                <a href="https://bookra1n.com/panel" target="_blank" rel="noopener noreferrer">
                  Web Panel
                </a>
                <a href="https://bookra1n.com/Blue/aio" target="_blank" rel="noopener noreferrer">
                  BR Team AiO
                </a>
                <a
                  href="https://bookra1n.com/a12/updates/Bookra1n.zip"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Bookra1n A12+
                </a>
                <a href="https://bookra1n.com/Blue/fmi" target="_blank" rel="noopener noreferrer">
                  FMI OFF Portal
                </a>
              </div>
              <div className="fcol">
                <h4>Community</h4>
                <a href="https://t.me/Bookra1n" target="_blank" rel="noopener noreferrer">
                  Telegram
                </a>
                <a href="https://bookra1n.com" target="_blank" rel="noopener noreferrer">
                  bookra1n.com
                </a>
                <a
                  href="http://bookra1n.com/Blue/legacydownloads"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Legacy Archive
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="foot-word" aria-hidden="true">
          BOOKRA1N
        </div>
        <div className="bwrap">
          <div className="foot-bot">
            <span>© 2026 BR TEAM — ALL RIGHTS RESERVED</span>
            <span>
              LOCAL TIME <FooterClock />
            </span>
            <span>NOT AFFILIATED WITH APPLE INC. OR SAMSUNG</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

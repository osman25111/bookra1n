"use client";

import { useCallback, useEffect, useState } from "react";
import LogoMark from "./logo-mark";

const LINKS = [
  { href: "#dls", label: "Downloads", idx: "01" },
  { href: "#frp", label: "FRP", idx: "02" },
  { href: "#tools", label: "Tools", idx: "03" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 24);
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  const close = useCallback(() => setOpen(false), []);

  return (
    <>
      <header className={`nav${scrolled ? " is-scrolled" : ""}`}>
        <div className="bwrap nav-in">
          <a className="brand" href="#top" aria-label="Bookra1n — home">
            <LogoMark size={24} />
            <b>
              BOOKRA<span className="g">1</span>N
            </b>
          </a>
          <nav aria-label="Main">
            <ul className="nv">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
              <li>
                <a
                  className="btn btn-p sm"
                  href="https://t.me/Bookra1n"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Telegram
                </a>
              </li>
            </ul>
          </nav>
          <button
            className="brg"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <div id="menu" className={`mmenu${open ? " is-open" : ""}`} aria-hidden={!open}>
        {LINKS.map((l) => (
          <a key={l.href} className="mlink" href={l.href} onClick={close} tabIndex={open ? 0 : -1}>
            <em>{l.idx}</em>
            {l.label}
          </a>
        ))}
        <a
          className="mlink"
          href="https://t.me/Bookra1n"
          target="_blank"
          rel="noopener noreferrer"
          onClick={close}
          tabIndex={open ? 0 : -1}
        >
          <em>04</em>Telegram
        </a>
        <div className="mmenu-foot">
          <a
            className="btn btn-g sm"
            href="https://bookra1n.com"
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={open ? 0 : -1}
          >
            bookra1n.com
          </a>
          <a
            className="btn btn-g sm"
            href="https://bookra1n.com/panel"
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={open ? 0 : -1}
          >
            Web Panel
          </a>
        </div>
      </div>
    </>
  );
}

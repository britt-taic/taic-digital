"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Header.module.css";

const LINKS = [
  { href: "#approach", label: "Approach" },
  { href: "#stack", label: "Services" },
  { href: "#work", label: "Work" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [navOpen, setNavOpen] = useState(false);
  const raf = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      if (raf.current) return;
      raf.current = requestAnimationFrame(() => {
        raf.current = null;
        const doc = document.documentElement;
        const max = doc.scrollHeight - window.innerHeight || 1;
        const p = Math.min(1, Math.max(0, window.scrollY / max));
        setProgress(p);
        setScrolled(window.scrollY > 12);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = navOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [navOpen]);

  const logoHeight = scrolled ? 54 : 108;

  return (
    <>
      <div className={styles.progress}>
        <div
          className={styles.progressFill}
          style={{ transform: `scaleX(${progress})` }}
        />
      </div>

      <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
        <div className={styles.inner}>
          <nav className={styles.navLeft}>
            {LINKS.map((l) => (
              <a key={l.href} href={l.href} className={styles.navLink}>
                {l.label}
              </a>
            ))}
          </nav>

          <a href="#top" className={styles.logoLink}>
            <img
              src="/taic-logo.svg"
              alt="Taic Digital — big agency thinking, small business focus"
              className={styles.logo}
              style={{ height: logoHeight }}
            />
          </a>

          <nav className={styles.navRight}>
            <a href="#contact" className={styles.contactPill}>
              Contact
            </a>
          </nav>

          <button
            type="button"
            aria-label="Menu"
            className={styles.menuBtn}
            onClick={() => setNavOpen(true)}
          >
            <span className={styles.menuIcon} />
            Menu
          </button>
        </div>
      </header>

      <div className={`${styles.mobileNav} ${navOpen ? styles.open : ""}`}>
        <div className={styles.mobileTop}>
          <span className={styles.mobileWordmark}>taic</span>
          <button
            type="button"
            className={styles.closeBtn}
            onClick={() => setNavOpen(false)}
          >
            Close
          </button>
        </div>
        <nav className={styles.mobileLinks}>
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={styles.mobileLink}
              onClick={() => setNavOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#about"
            className={styles.mobileLink}
            onClick={() => setNavOpen(false)}
          >
            About
          </a>
          <a
            href="#contact"
            className={styles.mobileLink}
            onClick={() => setNavOpen(false)}
          >
            Contact
          </a>
        </nav>
        <div className={styles.mobileFooter}>
          britt@taicdigital.ca
          <br />
          Halifax, Nova Scotia
        </div>
      </div>
    </>
  );
}

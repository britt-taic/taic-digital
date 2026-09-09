"use client";

import { useEffect } from "react";

/**
 * Drives the page's two scroll-linked behaviors:
 * - reveal-on-scroll for every [data-reveal] node (directional: up/left/right/scale)
 * - a light parallax drift for [data-parallax] nodes (e.g. the About pull-quote)
 *
 * Mirrors the original prototype's approach: nothing is scheduled off a
 * mount-time layout measurement (unsettled layout there made every node
 * appear at the top of the viewport and reveal instantly), so every node is
 * armed and observed, and a one-shot failsafe reveals everything if the
 * IntersectionObserver never fires.
 */
export default function ScrollEffects() {
  useEffect(() => {
    let reduce = false;
    try {
      reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    } catch (e) {}

    const nodes = Array.prototype.slice.call(
      document.querySelectorAll("[data-reveal]")
    );

    const show = (n) => {
      n.classList.add("is-revealed");
      n.setAttribute("data-revealed", "");
    };

    let io;
    let failsafe;

    if (reduce) {
      nodes.forEach(show);
    } else if (typeof IntersectionObserver !== "undefined") {
      let first = true;
      io = new IntersectionObserver(
        (entries) => {
          const initial = first;
          first = false;
          if (initial) clearTimeout(failsafe);
          entries
            .filter((e) => e.isIntersecting)
            .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
            .forEach((e, i) => {
              const el = e.target;
              io.unobserve(el);
              if (initial) {
                show(el);
              } else {
                setTimeout(() => show(el), i * 90);
              }
            });
        },
        { rootMargin: "0px 0px -10% 0px", threshold: 0.08 }
      );
      nodes.forEach((n) => io.observe(n));

      failsafe = setTimeout(() => {
        nodes.forEach((n) => {
          if (!n.hasAttribute("data-revealed")) show(n);
        });
      }, 1100);
    } else {
      nodes.forEach(show);
    }

    let raf = null;
    let onDrift = null;
    if (!reduce) {
      const layers = Array.prototype.slice.call(
        document.querySelectorAll("[data-parallax]")
      );
      onDrift = () => {
        if (raf) return;
        raf = requestAnimationFrame(() => {
          raf = null;
          const h = window.innerHeight || 800;
          layers.forEach((el) => {
            if (el.hasAttribute("data-reveal") && !el.hasAttribute("data-revealed"))
              return;
            const r = el.getBoundingClientRect();
            if (r.bottom < -200 || r.top > h + 200) return;
            const mid = (r.top + r.height / 2 - h / 2) / h;
            const amt = parseFloat(el.getAttribute("data-parallax")) || 20;
            el.style.transform = `translate3d(0, ${(-mid * amt).toFixed(2)}px, 0)`;
          });
        });
      };
      window.addEventListener("scroll", onDrift, { passive: true });
      onDrift();
    }

    return () => {
      if (io) io.disconnect();
      clearTimeout(failsafe);
      if (onDrift) window.removeEventListener("scroll", onDrift);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return null;
}

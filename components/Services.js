"use client";

import { useState } from "react";
import styles from "./Services.module.css";

const PANELS = [
  {
    vertLabel: "Website Strategy & UX",
    num: "01",
    kind: "Foundation layer",
    title: "Web Strategy & UX",
    desc: "From discovery through to launch, I help businesses build websites that actually work, for the people visiting them and for the business behind them. That means user research, UX audits, information architecture, wireframing, and strategy grounded in real behavior and real goals, not guesswork.",
    items: [
      "Discovery & stakeholder interviews",
      "Information architecture",
      "Sitemap & page inventory",
      "User journey mapping",
      "Persona development",
    ],
    scope:
      "Two to four weeks, ending with a sitemap, wireframes, and a strategy you can hand straight to a designer or developer.",
  },
  {
    vertLabel: "Design & Production",
    num: "02",
    kind: "CREATIVE LAYER",
    title: "Design & Production",
    desc: "From wireframes to final visuals, I design and produce whatever the project calls for: UI design, a design kit with tokens for the web build, marketing collateral, video, social content, and brand identity work when that's part of the scope. Whether we're working within your existing brand or building one from scratch, everything ends up feeling like it belongs together.",
    items: [
      "Wireframes & prototypes",
      "Visual design",
      "Design system",
      "Developer handoff",
      "Social assets",
      "Graphic design",
      "Brand identity",
    ],
    scope:
      "Four to ten weeks depending on scope, ending with production-ready designs and files a developer can build from directly, or your team can use going forward.",
  },
  {
    vertLabel: "Search & Visibility",
    num: "03",
    kind: "Visibility layer",
    title: "Search & Visibility",
    desc: "I cover technical, on-page, and local search, including your Google Business Profile, plus the newer work of staying visible inside AI-generated answers.",
    items: [
      "Technical & content audit",
      "Keyword and intent mapping",
      "Local SEO & Google Business Profile",
      "Generative engine visibility",
    ],
    scope:
      "A standalone audit and remediation runs two to four weeks and ends with a prioritized list of fixes. From there, some clients move into ongoing, month-to-month optimization.",
  },
  {
    vertLabel: "Website Development",
    num: "04",
    kind: "BUILD LAYER",
    title: "Website Development",
    desc: "For larger builds, I bring in a trusted network of full-stack developers to handle the heavy lifting, with my keen oversight and organization. For Webflow, Squarespace, or other page-builder sites, I build it and enter the content myself.",
    items: ["Webflow & Squarespace", "WordPress & Drupal", "Content & page builds"],
    scope:
      "Larger builds run on the developer's timeline, since scope varies project to project. Page-builder builds and content entry run about one week per page.",
  },
  {
    vertLabel: "Analytics & Reporting",
    num: "05",
    kind: "Evidence layer",
    title: "Analytics & Reporting",
    desc: "I set up GA4, GTM, and Looker Studio properly, so the monthly report actually describes what's happening on your site, not just noise.",
    items: [
      "GA4 configuration",
      "Google Tag Manager",
      "Looker Studio dashboards",
      "Conversion & event tracking",
    ],
    scope: "One to three weeks to set up, then reporting on a cadence.",
  },
  {
    vertLabel: "Content & Communications",
    num: "06",
    kind: "Voice layer",
    title: "Content & Communications",
    desc: "I write the copy, build out content structure and templates, and put together an editorial plan so your site doesn't go stale three months after launch.",
    items: [
      "Website copy",
      "Content structure & templates",
      "Editorial planning",
      "Campaign & contest content",
    ],
    scope: "Usually bundled with a redesign, or set up as a standing monthly allocation.",
  },
];

export default function Services() {
  const [active, setActive] = useState(0);

  return (
    <section id="stack" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.headRow}>
          <div data-reveal="up">
            <h2 className={styles.eyebrowHeadline}>Expertise</h2>
          </div>
          <div data-reveal="up">
            <p className={styles.intro}>
              Whether you&apos;re looking for an à la carte experience or
              retainer based support, I work with you to support you in all
              your digital marketing needs.
            </p>
          </div>
        </div>

        <div className={styles.row} data-reveal="scale">
          {PANELS.map((p, i) => (
            <button
              key={p.num}
              type="button"
              onClick={() => setActive(i)}
              className={`${styles.panel} ${i === active ? styles.active : ""}`}
              aria-expanded={i === active}
            >
              <span className={styles.vertLabel}>{p.vertLabel}</span>
              <div className={styles.expanded}>
                <div className={styles.expHead}>
                  <span className={styles.expNum}>{p.num}</span>
                  <span className={styles.expKind}>{p.kind}</span>
                </div>
                <h3 className={styles.expTitle}>{p.title}</h3>
                <p className={styles.expDesc}>{p.desc}</p>
                <div className={styles.includesLabel}>What it includes</div>
                <div className={styles.pills}>
                  {p.items.map((item) => (
                    <span key={item} className={styles.pill}>
                      {item}
                    </span>
                  ))}
                </div>
                <div className={styles.scopeRow}>
                  <span className={styles.scopeLabel}>Typical scope</span>
                  <span className={styles.scopeText}>{p.scope}</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

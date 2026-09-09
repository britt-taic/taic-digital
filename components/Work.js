import styles from "./Work.module.css";

const ENTRIES = [
  {
    id: "cove",
    className: "entryA",
    reveal: "left",
    logo: "/cove.png",
    logoLabel: "COVE logo",
    tags: ["UX strategy", "Website audit", "SEO/GEO", "Website development"],
    title: "COVE",
    desc: "I dug into COVE's digital presence to understand where they were being found — and where they weren't. The result was a full SEO and content audit with clear, actionable recommendations to help Halifax's ocean tech hub show up the way it deserves to.",
  },
  {
    id: "covershots",
    className: "entryB",
    reveal: "right",
    logo: "/covershots.png",
    logoLabel: "CoverShots logo",
    tags: [
      "Marketing communications",
      "Website design",
      "Search strategy",
      "CRM management",
      "Social media",
    ],
    title: "CoverShots",
    desc: "I work with CoverShots as an extension of their team. I help handle everything from website updates and email campaigns to search strategy and social media. It's the kind of embedded, ongoing partnership that lets a growing company punch above its weight.",
  },
  {
    id: "kijiji",
    className: "entryA",
    reveal: "left",
    logo: "/kijiji.png",
    logoLabel: "Kijiji logo",
    tags: ["UI design", "UX strategy"],
    title: "Kijiji",
    desc: "Interface and UX work on one of Canada's largest marketplaces — designing flows and components that had to hold up across an enormous range of listings, categories and user intents.",
  },
];

export default function Work() {
  return (
    <section id="work" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.headRow}>
          <div data-reveal="up">
            <h2 className={styles.headline}>Work</h2>
          </div>
          <div className={styles.introWrap} data-reveal="up">
            <p className={styles.intro}>
              I&apos;ve helped organizations across industries rethink their
              digital presence, from full website redesigns to targeted
              campaign launches.
            </p>
          </div>
        </div>

        <div className={styles.grid}>
          {ENTRIES.map((entry) => (
            <div
              key={entry.id}
              className={`${styles.entry} ${styles[entry.className]}`}
              data-reveal={entry.reveal}
            >
              <div className={styles.top}>
                <div className={styles.logoTile}>
                  <img
                    src={entry.logo}
                    alt={entry.logoLabel}
                    className={styles.logoImg}
                  />
                </div>
                <div className={styles.tags}>
                  {entry.tags.map((tag, i) => (
                    <span
                      key={tag}
                      className={i === 0 ? styles.tagPrimary : styles.tag}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <div className={styles.entryTitle}>{entry.title}</div>
                <p className={styles.entryDesc}>{entry.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

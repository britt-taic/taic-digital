import styles from "./Approach.module.css";

const STEPS = [
  {
    num: "01",
    title: "Diagnose",
    desc: "Every project starts with a conversation, not a pitch. I ask questions, look at what your data's already telling you, and get a real feel for what's working and what isn't. By the end, we both know where the opportunities are and what direction makes sense.",
  },
  {
    num: "02",
    title: "Plan",
    desc: "Once I know where things stand, I put together a plan: what to prioritize, what order it happens in, and how we'll know it's working.",
  },
  {
    num: "03",
    title: "Build",
    desc: "This is where the work actually gets made: design, content, development, whatever the project needs. I build it in stages and check in with you at each one, so you're weighing in as things take shape, rather than seeing it all for the first time at the end.",
  },
  {
    num: "04",
    title: "Support",
    desc: "From here it's about keeping things moving: running campaigns, checking the numbers, adjusting as we go. Or, if you'd rather take it from there, I'll hand everything off with documentation your team can actually use.",
  },
];

export default function Approach() {
  return (
    <section id="approach" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.headRow}>
          <div className={styles.headSpacer} />
          <div data-reveal="up">
            <h2 className={styles.headline}>How we&apos;ll work together.</h2>
          </div>
        </div>

        <div className={styles.grid}>
          {STEPS.map((s) => (
            <div key={s.num} className={styles.step} data-reveal="up">
              <span className={styles.dot} />
              <div className={styles.num}>{s.num}</div>
              <div className={styles.title}>{s.title}</div>
              <div className={styles.desc}>{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

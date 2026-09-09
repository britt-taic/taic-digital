import styles from "./Hero.module.css";
import Placeholder from "./Placeholder";

export default function Hero() {
  return (
    <section id="top" style={{ background: "var(--mist)" }} className={styles.hero}>
      <div className={styles.container}>
        <div data-handoff="hero-animation-target" className={styles.panel}>
          <h1 className={styles.headline}>
            Fractional digital marketing support for your business.
          </h1>
        </div>

        <div className={styles.row}>
          <div>
            <div className={styles.metaRow}>
              <span className={styles.metaItem}>Halifax, Nova Scotia</span>
              <span className={styles.metaDotItem}>
                <span className={styles.dot} />
                Accepting projects
              </span>
            </div>
            <p className={styles.intro}>
              Taic Digital is about bringing digital marketing support to your
              business. We step in when your small business has marketing
              needs but you&apos;re not quite ready to hire someone full time.
              Our expertise is in website strategy, design, SEO/AEO, Google
              Analytics and content.
            </p>
          </div>

          <div className={styles.right}>
            <div className={styles.person}>
              <div className={styles.avatar}>
                <Placeholder label="Photo" shape="circle" variant="mist" />
              </div>
              <div>
                <div className={styles.personName}>Britt Warren</div>
                <div className={styles.personRole}>Founder &amp; consultant</div>
              </div>
            </div>
            <a href="#about" className={styles.ctaBtn}>
              Meet Britt
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

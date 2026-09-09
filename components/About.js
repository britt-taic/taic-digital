import styles from "./About.module.css";
import AuroraTexture from "./AuroraTexture";

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div data-reveal="up">
            <img
              src="/logo-definition-cream.svg"
              alt="taic — vb. [tah-k], Gaelic origin, to support, backing"
              className={styles.wordmark}
            />

            <div className={styles.stack}>
              <div className={styles.backCard}>
                <AuroraTexture compact />
              </div>
              <div className={styles.frontCard}>
                <img
                  src="/britt-portrait.png"
                  alt="Portrait of Britt Warren"
                  className={styles.portrait}
                />
              </div>
            </div>
          </div>

          <div>
            <p className={styles.intro} data-reveal="up">
              Taic <span className={styles.introSay}>(say: tah-k)</span> is the
              idea behind everything I do. I&apos;m Britt, a digital
              marketing and UX consultant based in Halifax, Nova Scotia.
            </p>
            <blockquote className={styles.quote} data-reveal="up">
              <div className={styles.quoteInner} data-parallax="18">
                <p className={styles.quoteText}>
                  I partner with small businesses and growing organizations
                  to bring the kind of strategic thinking you&apos;d get from
                  a big agency, without the overhead.
                </p>
              </div>
            </blockquote>
            <p className={styles.body} data-reveal="up">
              I&apos;ve spent my career working across agencies and in-house
              teams, which means I know how to build strategies that
              actually get executed, not just presented. Whether you need
              someone to lead a website redesign, run your search ad
              campaigns, or help you figure out where to start, I weave
              myself into your team and treat your business like my own.
            </p>
            <p className={styles.bodyLast} data-reveal="up">
              When a project calls for specialized expertise, I work with a
              trusted network of collaborators to make sure{" "}
              <strong className={styles.strong}>
                you&apos;re getting the right people, not just more people
              </strong>
              .
            </p>
            <div className={styles.metaGrid} data-reveal="up">
              <div className={styles.metaItem}>
                <div className={styles.metaLabel}>Based</div>
                <div className={styles.metaValue}>
                  Halifax, Nova Scotia. Working with clients across Canada and
                  the US.
                </div>
              </div>
              <div className={styles.metaItem}>
                <div className={styles.metaLabel}>Engagements</div>
                <div className={styles.metaValue}>
                  Project, retainer, or fractional marketing lead.
                </div>
              </div>
              <div className={styles.metaItem}>
                <div className={styles.metaLabel}>Sectors</div>
                <div className={styles.metaValue}>
                  Professional services, trades, product based sales, and
                  B2B.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

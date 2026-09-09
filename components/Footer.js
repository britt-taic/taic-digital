import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div>
            <span className={styles.wordmark}>taic</span>
          </div>
          <div className={styles.right}>
            <div className={styles.label}>Contact</div>
            <div className={styles.info}>
              <a href="#contact">britt@taicdigital.ca</a>
              <span>Halifax, Nova Scotia</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

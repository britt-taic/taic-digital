import styles from "./AuroraTexture.module.css";

export default function AuroraTexture({ compact = false }) {
  return (
    <div
      className={`${styles.aurora} ${compact ? styles.compact : ""}`}
      aria-hidden="true"
    >
      <div className={`${styles.blob} ${styles.blobA}`} />
      <div className={`${styles.blob} ${styles.blobB}`} />
      <div className={`${styles.blob} ${styles.blobC}`} />
      <div className={`${styles.blob} ${styles.blobD}`} />
    </div>
  );
}

import styles from "./Headers.module.css";

const Headers = ({ primaryHeader, secondaryHeader, XLHeader }) => {
  return (
    <div className={styles.headerWrapper}>
      {XLHeader && <h1 className={styles.XLHeader}>{XLHeader}</h1>}
      {primaryHeader && (
        <h2 className={styles.headerPrimary}>{primaryHeader}</h2>
      )}

      {secondaryHeader && (
        <h6 className={styles.headerSecondary}>{secondaryHeader}</h6>
      )}
    </div>
  );
};

export default Headers;

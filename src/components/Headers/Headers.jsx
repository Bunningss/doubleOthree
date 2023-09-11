import styles from "./Headers.module.css";
import { roboto } from "@/app/layout";

const Headers = ({ primaryHeader, secondaryHeader, XLHeader, center }) => {
  return (
    <div
      className={`${styles.headerWrapper} ${center && styles.textCenter} ${
        roboto.className
      }`}
    >
      {XLHeader && <h1 className={styles.XLHeader}>{XLHeader}</h1>}

      {secondaryHeader && (
        <h6 className={styles.headerSecondary}>{secondaryHeader}</h6>
      )}

      {primaryHeader && (
        <h2 className={styles.headerPrimary}>{primaryHeader}</h2>
      )}
    </div>
  );
};

export default Headers;

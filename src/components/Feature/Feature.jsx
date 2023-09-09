import Image from "next/image";
import styles from "./Feature.module.css";

const Feature = ({ feature }) => {
  return (
    <div className={styles.feature}>
      <Image
        src={feature?.icon}
        alt={feature?.label}
        className={styles.featureIcon}
      />
      <h6 className={styles.featureLabel}>{feature?.label}</h6>
    </div>
  );
};

export default Feature;

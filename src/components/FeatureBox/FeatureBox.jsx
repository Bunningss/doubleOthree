import Image from "next/image";
import styles from "./FeatureBox.module.css";

const FeatureBox = ({ feature }) => {
  return (
    <div className={styles.featureBox}>
      <Image src={feature?.icon} alt="" className={styles.featureIcon} />
      <div className={styles.featureBoxContent}>
        <h4 className={styles.textPrimary}>{feature?.primaryFeature}</h4>
        <h6 className={styles.textSecondary}>{feature?.secondaryFeature}</h6>
      </div>
    </div>
  );
};

export default FeatureBox;

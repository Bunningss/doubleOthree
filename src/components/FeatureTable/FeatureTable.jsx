import { comparisons } from "@/staticData";
import styles from "./FeatureTable.module.css";
import FeaturetableContent from "./FeaturetableContent/FeaturetableContent";

const FeatureTable = () => {
  return (
    <>
      <div className={styles.table}>
        {/* Header */}
        <div className={styles.tableHeader}></div>
        <div className={styles.tableHeader}>CARLYLE</div>
        <div className={styles.tableHeader}>Wordpress DIY</div>
        <div className={styles.tableHeader}>Agency</div>
      </div>
      {comparisons.map((comp, indx) => (
        <FeaturetableContent data={comp} key={indx} />
      ))}
    </>
  );
};

export default FeatureTable;

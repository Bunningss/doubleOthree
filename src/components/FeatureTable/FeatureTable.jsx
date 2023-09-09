import styles from "./FeatureTable.module.css";
import FeaturetableContent from "./FeaturetableContent/FeaturetableContent";

const FeatureTable = () => {
  return (
    <>
      <div className={styles.table}>
        {/* Header */}
        <div className={styles.tableHeader}></div>
        <div className={styles.tableHeader}>UENI</div>
        <div className={styles.tableHeader}>Wordpress DIY</div>
        <div className={styles.tableHeader}>Agency</div>
      </div>
      <FeaturetableContent />
      <FeaturetableContent />
      <FeaturetableContent />
      <FeaturetableContent />
      <FeaturetableContent />
      <FeaturetableContent />
      <FeaturetableContent />
      <FeaturetableContent />
      <FeaturetableContent />
      <FeaturetableContent />
    </>
  );
};

export default FeatureTable;

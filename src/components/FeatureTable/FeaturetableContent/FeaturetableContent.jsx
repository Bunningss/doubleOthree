import styles from "./FeaturetableContent.module.css";

const FeaturetableContent = () => {
  return (
    <div className={styles.columnWrapper}>
      <span className={styles.tableColumn}>Some sort of content</span>
      <span className={styles.tableColumn}>UENI</span>
      <span className={styles.tableColumn}>Wordpress DIY</span>
      <span className={styles.tableColumn}>Agency</span>
    </div>
  );
};

export default FeaturetableContent;

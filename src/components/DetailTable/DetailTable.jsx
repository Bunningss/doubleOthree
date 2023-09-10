import { comparisons } from "@/staticData";
import styles from "./DetailTable.module.css";
import FeaturetableContent from "./DetailTableContent/DetailTableContent";

const DetailTable = () => {
  return (
    <>
      <div className={styles.table}>
        {/* Header */}
        <div className={styles.tableHeader}></div>
        <div className={styles.tableHeader}>TATAMAX</div>
        <div className={styles.tableHeader}>Wordpress DIY</div>
        <div className={styles.tableHeader}>Agency</div>
      </div>
      {comparisons.map((comp, indx) => (
        <FeaturetableContent data={comp} key={indx} />
      ))}
    </>
  );
};

export default DetailTable;

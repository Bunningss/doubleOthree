import Image from "next/image";
import styles from "./DetailTableContent.module.css";

const DetailTableContent = ({ data }) => {
  return (
    <div className={styles.columnWrapper}>
      <span className={styles.tableColumn}>{data?.label}</span>

      {data.us && <span className={styles.tableColumn}>{data?.us}</span>}

      {data.usIcon && (
        <span className={styles.tableColumn}>
          <Image className={styles.tableColumnIcon} src={data?.usIcon} alt="" />
        </span>
      )}

      {data.others && (
        <span className={styles.tableColumn}>{data?.others}</span>
      )}

      {data.usIcon && (
        <span className={styles.tableColumn}>
          <Image className={styles.tableColumnIcon} src={data?.usIcon} alt="" />
        </span>
      )}

      {data.agency && (
        <span className={styles.tableColumn}>{data?.agency}</span>
      )}

      {data.usIcon && (
        <span className={styles.tableColumn}>
          <Image className={styles.tableColumnIcon} src={data?.usIcon} alt="" />
        </span>
      )}
    </div>
  );
};

export default DetailTableContent;

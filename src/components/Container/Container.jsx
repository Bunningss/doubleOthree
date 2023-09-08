import styles from "./Container.module.css";

const Container = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.containerContent}>{children}</div>
    </div>
  );
};

export default Container;

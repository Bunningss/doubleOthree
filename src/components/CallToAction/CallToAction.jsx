import styles from "./CallToAction.module.css";

const CallToAction = ({ children }) => {
  return (
    <div className={styles.cta} style={{ backgroundColor: "var(--secondary)" }}>
      {children}
    </div>
  );
};

export default CallToAction;

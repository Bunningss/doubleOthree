import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <h2 className={styles.heroTitle}>
        creating the - <span className={styles.heroTitleOutlined}>future</span>{" "}
        of web
      </h2>
      <p className={styles.heroText}>
        Helping businesses go online and grow bigger with high-tech web
        applications.
      </p>
    </div>
  );
};

export default Hero;

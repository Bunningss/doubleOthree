import styles from "./Hero.module.css";
import { roboto } from "@/app/layout";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <h2 className={`${styles.heroTitle} ${roboto.className}`}>
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

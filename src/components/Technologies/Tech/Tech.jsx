import Image from "next/image";
import styles from "./Tech.module.css";

const Tech = ({ technology }) => {
  return (
    <div className={styles.tech}>
      <Image
        src={technology.image}
        alt={technology.label}
        className={styles.techImage}
      />
    </div>
  );
};

export default Tech;

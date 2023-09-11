import Image from "next/image";
import styles from "./Tech.module.css";
import demo from "@/images/css.png";

const Tech = () => {
  return (
    <div className={styles.tech}>
      <Image src={demo} alt="" className={styles.techImage} />
    </div>
  );
};

export default Tech;

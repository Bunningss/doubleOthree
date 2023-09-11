import Headers from "../Headers/Headers";
import styles from "./Vision.module.css";
import { roboto } from "@/app/layout";

const Vision = () => {
  return (
    <div className={styles.vision}>
      <h2 className={`${styles.visionTitle} ${roboto.className}`}>
        our vision
      </h2>
      <Headers
        primaryHeader={
          "Here, we embrace the challenge to drive each other to excellence by enriching our own capabilities."
        }
        secondaryHeader={"WE ENVISION WITH A MISSION"}
      />
      <div className={styles.visionContent}>
        <p className={styles.visionColumn}>
          We have a unique combination of talents motivated by ambitious goals
          and a can-do attitude. Our drive to develop excellent products is
          built on teamwork, passion, and giving team members full control over
          their work to succeed on their own. We want to create an environment
          where ideas can flourish.
        </p>
        <p className={styles.visionColumn}>
          We dream, design, develop, and dare to challenge the status quo and
          make a difference. We strive to develop a rich culture by expanding
          our horizons and bringing you ideas outside of the box
        </p>
      </div>
    </div>
  );
};

export default Vision;

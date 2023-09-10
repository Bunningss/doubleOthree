import Headers from "../Headers/Headers";
import styles from "./Vision.module.css";

const Vision = () => {
  return (
    <div className={styles.vision}>
      <h2 className={styles.visionTitle}>our vision</h2>
      <Headers
        primaryHeader={
          "Here, we embrace the challenge to drive each other to excellence by enriching our own capabilities."
        }
        secondaryHeader={"WE ENVISION WITH A MISSION"}
      />
    </div>
  );
};

export default Vision;

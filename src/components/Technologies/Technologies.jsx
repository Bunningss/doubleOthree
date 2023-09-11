import Container from "../Container/Container";
import Headers from "../Headers/Headers";
import Tech from "./Tech/Tech";
import styles from "./Technologies.module.css";

const Technologies = () => {
  return (
    <div className={styles.techs}>
      <Container>
        <Headers
          primaryHeader={"Technologies we use"}
          secondaryHeader={"top clients"}
        />
        <p className={styles.techsText}>
          TATAMAX Solutions has grown into an international contestant in
          enterprise application development services with wide-ranging
          expertise in all areas needed for reliable software development.
        </p>
        <div className={styles.techsContent}>
          <Tech />
          <Tech />
          <Tech />
          <Tech />
          <Tech />
          <Tech />
          <Tech />
          <Tech />
        </div>
      </Container>
    </div>
  );
};

export default Technologies;

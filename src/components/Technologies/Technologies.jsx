import { technologies } from "@/staticData";
import Container from "../Container/Container";
import Headers from "../Headers/Headers";
import Tech from "./Tech/Tech";
import styles from "./Technologies.module.css";

const Technologies = () => {
  return (
    <div className={styles.techs}>
      <Container>
        <Headers
          primaryHeader={"We are limitless in terms of technology"}
          secondaryHeader={"our wings"}
        />
        <p className={styles.techsText}>
          TATAMAX Solutions has grown into an international contestant in
          enterprise application development services with wide-ranging
          expertise in all areas needed for reliable software development.
        </p>
        <div className={styles.techsContent}>
          {technologies.map((technology, indx) => (
            <Tech technology={technology} key={indx} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Technologies;

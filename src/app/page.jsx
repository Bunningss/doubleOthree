import styles from "./page.module.css";
import { features, services } from "@/staticData";
import Feature from "@/components/Feature/Feature";
import Button from "@/components/Button/Button";
import Container from "@/components/Container/Container";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className={styles.hero}>
        <Container>
          <h2 className={`${styles.headerPrimary} headerLarge`}>
            Website built in 7 days. By experts, for you.
          </h2>
          <h5 className={`${styles.headerSecondary} headerSecondary`}>
            Only £99+VAT one time fee and then just £5.99/month.
          </h5>
          <div className={styles.features}>
            {features.map((feature, indx) => (
              <Feature feature={feature} key={indx} />
            ))}
          </div>
          <div className={styles.buttonsWrapper}>
            <Button label={"get started"} primary medium />
            <Button label={"whats included"} medium />
          </div>
          <div className={styles.services}>
            <div className={styles.servicesContent}>
              <div className={styles.servicesColumn}>
                {services.map((service, indx) => (
                  <Feature key={indx} feature={service} />
                ))}
              </div>
              <div className={styles.servicesColumn}>
                <Image src="" alt="Promotion Image" />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </main>
  );
}

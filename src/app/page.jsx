import styles from "./page.module.css";
import { features, services } from "@/staticData";
import Feature from "@/components/Feature/Feature";
import Button from "@/components/Button/Button";
import Container from "@/components/Container/Container";
import Image from "next/image";
import promotion from "@/images/promotion.png";
import FeatureTable from "@/components/FeatureTable/FeatureTable";
import Headers from "@/components/Headers/Headers";
import Section from "@/components/Section/Section";

export default function Home() {
  return (
    <main>
      <div className={styles.hero}>
        <Container>
          <Headers
            XLHeader={"Website built in 7 days. By experts, for you."}
            primaryHeader={
              "Only £99+VAT one time fee and then just £5.99/month."
            }
          />

          <div className={styles.features}>
            {features.map((feature, indx) => (
              <Feature feature={feature} key={indx} />
            ))}
          </div>
          <div className={styles.buttonsWrapper}>
            <Button label={"get started"} primary medium />
            <Button label={"whats included?"} medium />
          </div>

          {/* Services Section */}
          <Section>
            <div className={styles.services}>
              <Headers
                primaryHeader={"Get an website at an affordable price"}
                secondaryHeader={"Launch your dream"}
              />
              <div className={styles.servicesContent}>
                <div className={styles.servicesColumn}>
                  {services.map((service, indx) => (
                    <Feature key={indx} feature={service} />
                  ))}
                </div>
                <div className={styles.servicesColumn}>
                  <Image
                    src={promotion}
                    alt="Promotion Image"
                    className={styles.servicesImage}
                  />
                </div>
              </div>
            </div>
          </Section>

          {/* Features Table */}
          <Section>
            <Headers
              primaryHeader={"What makes us different"}
              secondaryHeader={
                "Easier & more affordable than DIY website builders and agencies."
              }
            />
            <FeatureTable />
          </Section>
        </Container>
      </div>
    </main>
  );
}

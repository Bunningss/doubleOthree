import styles from "./page.module.css";
import { featureBoxContents, features, services } from "@/staticData";
import Feature from "@/components/Feature/Feature";
import Button from "@/components/Button/Button";
import Container from "@/components/Container/Container";
import Image from "next/image";
import promotion from "@/images/promotion.png";
import DetailTable from "@/components/DetailTable/DetailTable";
import Headers from "@/components/Headers/Headers";
import Section from "@/components/Section/Section";
import FeatureBox from "@/components/FeatureBox/FeatureBox";

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

          {/* Details Table */}
          <Section>
            <Headers
              primaryHeader={"What makes us different"}
              secondaryHeader={
                "Easier & more affordable than DIY website builders and agencies."
              }
            />
            <DetailTable />
          </Section>

          {/* Features Section */}
          <Section>
            <Headers
              primaryHeader={"What features are included in your website?"}
              secondaryHeader={
                "All the essentials to run a successful website or online store."
              }
            />
            <div className={styles.featureBoxes}>
              {featureBoxContents.map((content, indx) => (
                <FeatureBox key={indx} feature={content} />
              ))}
            </div>
          </Section>
        </Container>
      </div>
    </main>
  );
}

import styles from "./page.module.css";
import { featureBoxContents, features, services } from "@/staticData";
import Feature from "@/components/Feature/Feature";
import Button from "@/components/Button/Button";
import Container from "@/components/Container/Container";
import Image from "next/image";
import promotion from "@/images/promotion.png";
import moneyback from "@/images/moneyback.svg";
import DetailTable from "@/components/DetailTable/DetailTable";
import Headers from "@/components/Headers/Headers";
import Section from "@/components/Section/Section";
import FeatureBox from "@/components/FeatureBox/FeatureBox";
import CallToAction from "@/components/CallToAction/CallToAction";
import Hero from "@/components/Hero/Hero";
import Vision from "@/components/Vision/Vision";

export default function Home() {
  return (
    <main>
      <div className={styles.hero}>
        <Container>
          <Section>
            <Hero />
          </Section>

          <Section>
            <Vision />
          </Section>

          <Section>
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
          </Section>

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
              primaryHeader={
                "Easier & more affordable than DIY website builders and agencies."
              }
              secondaryHeader={"What sets us apart?"}
            />
            <DetailTable />
          </Section>

          {/* Features Section */}
          <Section>
            <Headers
              primaryHeader={
                "All the essentials to run a successful website or online store."
              }
              secondaryHeader={"What features are included in your website?"}
            />
            <div className={styles.featureBoxes}>
              {featureBoxContents.map((content, indx) => (
                <FeatureBox key={indx} feature={content} />
              ))}
            </div>
          </Section>

          {/* CTA - Money-Back */}
          <Section>
            {/* <CallToAction>
              <div className={styles.financialCtaWrapper}>
                <div className={styles.financialCtaColumn}>
                  <h2>50-Day Money-Back Guarantee</h2>
                  <p>
                    "Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Optio a cumque nostrum ullam quis, ut delectus. Ipsum
                    perspiciatis autem tempore cum deleniti, rerum ab, doloribus
                    ut aliquam soluta corrupti velit earum neque reiciendis
                    accusantium delectus? Quaerat voluptatum praesentium commodi
                    magni."
                  </p>
                  <Button label={"get started"} />
                </div>
                <div className={styles.financialCtaColumn}>
                  <Image
                    src={moneyback}
                    alt=""
                    className={styles.financialCtaImage}
                  />
                </div>
              </div>
            </CallToAction> */}
          </Section>
        </Container>
      </div>
    </main>
  );
}

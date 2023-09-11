import Container from "../Container/Container";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <Container>
        <p className={styles.footerText}>
          &copy; All content is available under the <b>TATAMAX</b> Licence V.Web
          2.70, except where otherwise stated.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;

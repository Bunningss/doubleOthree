import Button from "../Button/Button";
import Container from "../Container/Container";
import Logo from "./Logo/Logo";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Container>
        <div className={styles.navContent}>
          <Logo />
          <Button label={"login"} />
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;

"use client";
import styles from "./Button.module.css";

const Button = ({ label, action, primary, small }) => {
  return (
    <button
      className={`${styles.button} ${
        primary ? styles.buttonPrimary : styles.buttonSecondary
      } ${small ? styles.buttonSmall : styles.buttonMedium}`}
    >
      {label}
    </button>
  );
};

export default Button;

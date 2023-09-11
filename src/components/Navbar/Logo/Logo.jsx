"use client";
import styles from "./Logo.module.css";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return (
    <div className={styles.logoWrapper} onClick={() => router.push("/")}>
      <h2 className={styles.logo}>tatamax</h2>
      <p className={styles.slogan}>You demand, We develop</p>
    </div>
  );
};

export default Logo;

"use client";
import styles from "./Logo.module.css";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return (
    <h2 className={styles.logo} onClick={() => router.push("/")}>
      tatamax
    </h2>
  );
};

export default Logo;

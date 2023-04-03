import Link from "next/link";
import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <Link href="/">
      <div className={styles.logo}></div>
    </Link>
  );
};

export default Logo;

"use client";

import Link from "next/link";
import styles from "./Logo.module.css";
import { usePathname, useRouter } from "next/navigation";
import { FiChevronLeft as ChevronLeft } from "react-icons/fi";

const Logo = () => {
  const router = useRouter();
  const pathName = usePathname();

  return (
    <Link href="/">
      <div className={styles.logo}>{pathName === "/" ? "" : <ChevronLeft color="white" className={styles.icon} />}</div>
    </Link>
  );
};

export default Logo;

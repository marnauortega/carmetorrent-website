"use client";

import Link from "next/link";
import styles from "./Logo.module.css";
import { usePathname, useRouter } from "next/navigation";
import { FiChevronLeft as ChevronLeft } from "react-icons/fi";

const Logo = ({ locale }) => {
  const router = useRouter();
  const pathName = usePathname();

  return (
    <Link href={`/${locale}`}>
      <div className={styles.logo}>
        {pathName.length <= 4 ? "" : <ChevronLeft color="white" className={styles.icon} />}
      </div>
    </Link>
  );
};

export default Logo;

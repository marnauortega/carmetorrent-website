"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiChevronRight } from "react-icons/fi";

import styles from "./NavLink.module.css";

const NavLink = ({ locale, slug, children }) => {
  const pathname = usePathname();
  console.log(pathname);
  const active = pathname.includes(slug);

  return (
    <div className={`${styles.link} ${active ? styles.active : undefined}`}>
      <Link href={`/${locale}/${slug}`}>{children}</Link>
      <FiChevronRight className={styles.icon} />
    </div>
  );
};

export default NavLink;

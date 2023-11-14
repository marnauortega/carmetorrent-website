"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiChevronRight } from "react-icons/fi";
import MySanityImage from "../MySanityImage/MySanityImage";

import styles from "./NavLink.module.css";

const NavLink = ({ locale, slug, image, children }) => {
  const pathname = usePathname();
  const active = pathname.includes(slug);
  const home = ["/", "/ca", "/es", "/en"].includes(pathname);

  return (
    <>
      <div className={`${styles.link} ${active ? styles.active : undefined}`}>
        <Link href={`/${locale}/work/${slug}`}>{children}</Link>
        <FiChevronRight className={styles.icon} />
      </div>
      {/* {image && home && <MySanityImage image={image} className={styles.image} />} */}
    </>
  );
};

export default NavLink;

import Link from "next/link";
import { getAllWorkTitlesAndSlugs } from "@/sanity/queries";

import styles from "./NavList.module.css";

const NavList = async ({ locale }) => {
  const workTitles = await getAllWorkTitlesAndSlugs(locale);
  return (
    <ul className={styles.navList}>
      {workTitles.map(({ title, slug }) => (
        <li key={slug} className={styles.li}>
          <Link href={`/${locale}/${slug}`}>{title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default NavList;

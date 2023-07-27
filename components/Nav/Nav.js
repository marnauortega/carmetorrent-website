import Link from "next/link";
import { getAllWorkTitlesAndSlugs } from "@/sanity/queries";

import styles from "./Nav.module.css";

const Nav = async ({ locale, className }) => {
  const workTitles = await getAllWorkTitlesAndSlugs(locale);
  return (
    <aside className={`${styles.aside} ${className}`}>
      <nav className={styles.nav} data-lenis-prevent>
        <ul className={styles.navList}>
          {workTitles.map(({ title, slug }) => (
            <li key={slug} className={styles.li}>
              <Link href={`/${locale}/${slug}`}>{title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Nav;

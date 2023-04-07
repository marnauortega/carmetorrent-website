import Link from "next/link";

import { getAllWorkTitlesAndSlugs } from "@/sanity/queries";

import styles from "./Nav.module.css";

const Nav = async () => {
  const workTitles = await getAllWorkTitlesAndSlugs();

  return (
    <nav>
      <ul className={styles.navList}>
        {workTitles.map(({ title, slug }) => (
          <li key={slug} className={styles.li}>
            <Link href={slug}>{title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;

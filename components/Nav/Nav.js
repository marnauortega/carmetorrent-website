import Link from "next/link";

import { getAllWorkTitlesAndSlugs } from "@/sanity/queries";

import styles from "./Nav.module.css";

const Nav = async () => {
  const workTitles = await getAllWorkTitlesAndSlugs();

  return (
    <ul className={styles.navList}>
      {workTitles.map(({ title, slug }) => (
        <li key={slug}>
          <Link href={slug}>{title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Nav;

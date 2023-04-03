import Link from "next/link";
import { postArray } from "@/data/postArray";
import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <ul className={styles.navList}>
      {postArray.map(({ title, slug }) => (
        <li key={slug}>
          <Link href={slug}>{title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Nav;

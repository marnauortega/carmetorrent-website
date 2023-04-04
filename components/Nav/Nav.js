import Link from "next/link";
import { workArray } from "@/data/workArray";
import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <ul className={styles.navList}>
      {workArray.map(({ title, slug }) => (
        <li key={slug}>
          <Link href={slug}>{title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Nav;

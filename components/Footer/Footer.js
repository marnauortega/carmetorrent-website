import { oneOffPostArray } from "@/data/oneOffPostArray";
import Link from "next/link";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <ul className={styles.footerList}>
      {oneOffPostArray.map(({ title, slug }) => (
        <li key={slug}>
          <Link href={slug}>{title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Footer;

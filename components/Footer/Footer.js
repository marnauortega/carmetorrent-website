import Link from "next/link";

import { getSingletons } from "@/sanity/queries";

import styles from "./Footer.module.css";

const Footer = async () => {
  const singletons = await getSingletons();

  return (
    <ul className={styles.footerList}>
      {singletons.map(({ title, slug }) => (
        <li key={slug} className={styles.li}>
          <Link href={slug}>{title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Footer;

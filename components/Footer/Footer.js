import Link from "next/link";

import { getSingletons } from "@/sanity/queries";

import styles from "./Footer.module.css";

const Footer = async ({ locale }) => {
  const singletons = await getSingletons(locale);

  return (
    <nav>
      <ul className={styles.footerList}>
        {singletons.map(({ title, slug }) => (
          <li key={slug} className={styles.li}>
            <Link href={`/${locale}/${slug}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Footer;

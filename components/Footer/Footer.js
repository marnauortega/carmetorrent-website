import Link from "next/link";
import { getSingletons } from "@/sanity/queries";

import styles from "./Footer.module.css";

const Footer = async ({ locale }) => {
  const singletons = await getSingletons(locale);

  return (
    <footer className={styles.footerList}>
      <nav>
        <ul>
          {singletons.map(({ title, slug, translations }) => {
            const defaultLocaleTranslation = translations.find((translation) => translation.language === "ca");
            const defaultLocaleSlug = defaultLocaleTranslation.slug.current;
            console.log(defaultLocaleSlug);
            return (
              <li key={slug} className={styles.li}>
                <Link href={`/${locale}/${defaultLocaleSlug}`}>{title}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;

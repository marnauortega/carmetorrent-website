import LanguageToggler from "@/components/LanguageToggler/LanguageToggler";
import locales from "@/utils/locales";
import Nav from "@/components/Nav/Nav";
import MobileMenu from "@/components/MobileMenu/MobileMenu";

import styles from "./page.module.css";

export async function generateStaticParams() {
  return locales.map((locale) => ({
    locale: locale.id,
  }));
}

export default function Home({ params }) {
  return (
    <>
      <LanguageToggler params={params} />
      <Nav locale={params.locale} className={styles.mobileNav} />
      <MobileMenu params={params} />
    </>
  );
}

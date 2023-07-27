import LanguageToggler from "@/components/LanguageToggler/LanguageToggler";
import { Inter } from "next/font/google";
import locales from "@/utils/locales";
import Nav from "@/components/Nav/Nav";
import MobileMenu from "@/components/MobileMenu/MobileMenu";

import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export async function generateStaticParams() {
  return locales.map((locale) => ({
    locale: locale.id,
  }));
}

export default function Home({ params }) {
  return (
    <>
      <Nav locale={params.locale} className={styles.mobileNav} />
      <LanguageToggler params={params} />
      <MobileMenu params={params} />
    </>
  );
}

import LanguageToggler from "@/components/LanguageToggler/LanguageToggler";
import locales from "@/utils/locales";
import Nav from "@/components/Nav/Nav";
import MobileMenu from "@/components/MobileMenu/MobileMenu";
import ViewToggler from "@/components/ViewToggler/ViewToggler";

import styles from "./page.module.css";

export const dynamic = "force-static";
export const revalidate = 1;

export async function generateStaticParams() {
  return locales.map((locale) => ({
    locale: locale.id,
  }));
}

export default function Home({ params }) {
  return (
    <>
      <LanguageToggler params={params} />
      <Nav locale={params.locale} />
      <ViewToggler locale={params.locale} list={true} />
      <MobileMenu params={params} />
    </>
  );
}

import LanguageToggler from "@/components/LanguageToggler/LanguageToggler";
import { Inter } from "next/font/google";
import locales from "@/utils/locales";

const inter = Inter({ subsets: ["latin"] });

export async function generateStaticParams() {
  return locales.map((locale) => ({
    locale: locale.id,
  }));
}

export default function Home({ params }) {
  return (
    <>
      <LanguageToggler params={params} />
    </>
  );
}

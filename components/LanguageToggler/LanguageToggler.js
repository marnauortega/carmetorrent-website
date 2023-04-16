"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import i18nConfig from "@/sanity/i18nConfig";
import styles from "./LanguageToggler.module.css";

let locales = i18nConfig.languages.map((lang) => lang.id.slice(0, 2));

const LanguageToggler = ({ locale }) => {
  const pathname = usePathname();
  // Now all urls start with two characters, but TODO: default language shouldn't be in url
  const URLContainsLocale = pathname.startsWith(`/${locale}/`);
  let pathnameWithoutLocale;
  if (URLContainsLocale) pathnameWithoutLocale = pathname.slice(4);
  console.log(pathnameWithoutLocale);
  return (
    <div className={styles.wrapper}>
      {locales
        .filter((l) => locale !== l)
        .map((l) => (
          <Link key={l} href={`/${l}/${pathnameWithoutLocale}`}>
            {l}
          </Link>
        ))}
    </div>
  );
};

export default LanguageToggler;

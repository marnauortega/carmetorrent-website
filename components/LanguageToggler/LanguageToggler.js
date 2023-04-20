"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import i18nConfig from "@/sanity/i18nConfig";
import styles from "./LanguageToggler.module.css";

let locales = i18nConfig.supportedLanguages.map((lang) => lang.id.slice(0, 2));

const LanguageToggler = ({ params: { locale, slug } }) => {
  // const pathname = usePathname();
  // console.log(locale, slug);
  // const URLContainsSubPath = pathname.startsWith(`/${locale}/`) || !!locale;
  // console.log(pathname.split("/"), locale, URLContainsSubPath);
  // let pathnameSubPath = "";
  // if (URLContainsSubPath) pathnameSubPath = pathname.split("/")[2];

  return (
    <div className={styles.wrapper}>
      {locales
        .filter((l) => locale !== l)
        .map((l) => (
          <Link key={l} href={`/${l}/${slug}`}>
            {l}
          </Link>
        ))}
    </div>
  );
};

export default LanguageToggler;

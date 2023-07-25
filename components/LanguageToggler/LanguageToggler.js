import Link from "next/link";
import i18nConfig from "@/sanity/i18nConfig";
import styles from "./LanguageToggler.module.css";

let locales = i18nConfig.supportedLanguages.map((lang) => lang.id.slice(0, 2));

const LanguageToggler = ({ params: { locale, slug } }) => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.currentLocale}>{locale}</span>
      <div className={styles.otherLocales}>
        {locales
          .filter((l) => locale !== l)
          .map((l) => (
            <Link key={l} href={`/${l}/${slug}`}>
              {l}
            </Link>
          ))}
      </div>
    </div>
  );
};

export default LanguageToggler;

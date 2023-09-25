import Link from "next/link";
import locales from "@/utils/locales";
import styles from "./DesktopToggler.module.css";

const DesktopToggler = ({ params: { locale, slug }, pathname, translations }) => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.currentLocale}>{locale}</span>
      <div className={styles.otherLocales}>
        {locales
          .filter((otherlocale) => locale !== otherlocale.id)
          .map((otherLocale) => {
            // replace locale
            let href = locale === "ca" ? `/${otherLocale.id}${pathname}` : pathname.replace(locale, otherLocale.id);
            // translate project slug
            if (slug && translations) {
              const translatedSlug = translations.find((translation) => translation?.language === otherLocale.id)?.slug;
              href = href.replace(slug, translatedSlug);
            }
            return (
              <Link key={otherLocale.id} href={href}>
                {otherLocale.id}
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default DesktopToggler;

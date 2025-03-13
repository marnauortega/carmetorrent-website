import Link from "next/link";
import locales from "@/utils/locales";
import styles from "./DesktopToggler.module.css";

const DesktopToggler = ({ params: { locale }, pathname }) => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.currentLocale}>{locale}</span>
      <div className={styles.otherLocales}>
        {locales
          .filter((otherlocale) => locale !== otherlocale.id)
          .map((otherLocale) => {
            // replace locale
            let href = pathname.replace(locale, otherLocale.id);
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

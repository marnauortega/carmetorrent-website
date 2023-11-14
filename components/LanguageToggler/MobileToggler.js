"use client";

import Link from "next/link";
import locales from "@/utils/locales";
import styles from "./MobileToggler.module.css";
import { AnimatePresence, motion } from "framer-motion";

const MobileToggler = ({ params: { locale, slug }, pathname, translations }) => {
  const menu = {
    hidden: {
      transition: {
        delayChildren: 0,
      },
    },
    visible: {
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const menuItem = {
    hidden: {
      opacity: 0,
      x: 10,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 35,
      },
    },
  };

  //   TODO: dry, repeated in desktoptoggler. The reason is to have different styles
  return (
    <motion.div className={styles.wrapper} initial="hidden" animate="visible" exit="hidden" variants={menu}>
      <motion.span className={styles.currentLocale} variants={menuItem}>
        {locale}
      </motion.span>
      {locales
        .filter((otherlocale) => locale !== otherlocale.id)
        .map((otherLocale) => {
          // replace locale
          let href = pathname.replace(locale, otherLocale.id);
          // translate project slug
          if (slug && translations) {
            const translatedSlug = translations.find((translation) => translation.language === otherLocale.id)?.slug;
            href = href.replace(slug, translatedSlug);
          }
          return (
            <motion.div variants={menuItem}>
              <Link key={otherLocale.id} href={href}>
                {otherLocale.id}
              </Link>
            </motion.div>
          );
        })}
    </motion.div>
  );
};

export default MobileToggler;

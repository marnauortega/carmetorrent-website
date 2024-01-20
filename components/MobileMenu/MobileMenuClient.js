"use client";

import Image from "next/image";
import hamb from "@/public/hamb.svg";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import styles from "./MobileMenuClient.module.css";
import LanguageToggler from "../LanguageToggler/LanguageToggler";

const MobileMenuClient = ({ params, singletons }) => {
  const locale = params.locale;
  const [menuOpen, setMenuOpen] = useState(false);

  const menu = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
    exit: {
      // transition: {
      //   staggerChildren: -0.02,
      // },
    },
  };

  const menuItem = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 35,
      },
    },
    exit: {
      opacity: 0,
      y: 10,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 20,
      },
    },
  };

  const languageToggler = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 35,
      },
    },
  };

  return (
    <>
      <motion.div
        className={`${styles.background}`}
        animate={{
          y: menuOpen ? "0%" : "-100%",
          // backgroundColor: menuOpen ? "rgba(250, 246, 241, 1)" : "rgba(250, 246, 241, 0)",
        }}
        initial={false}
        transition={{
          duration: 0.6,
          type: "spring",
          stiffness: 175,
          damping: 40,
          delay: menuOpen ? 0 : 0.3,
        }}></motion.div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="menu"
            className={styles.menuWrapper}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menu}>
            <ul>
              {/* <motion.li variants={menuItem}>
                <Link href={`/${locale}`}>
                  <h2 className="h1">{locale === "ca" ? "obres" : locale === "es" ? "obras" : "work"}</h2>
                </Link>
              </motion.li> */}
              {singletons.map(({ title, slug, translations }) => {
                const defaultLocaleTranslation = translations.find((translation) => translation.language === "ca");
                const defaultLocaleSlug = defaultLocaleTranslation.slug.current;
                return (
                  <motion.li key={slug} className={styles.li} variants={menuItem}>
                    <Link href={`/${locale}/${defaultLocaleSlug}`}>
                      {" "}
                      <p>{title}</p>
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
            <motion.div variants={languageToggler}>
              <LanguageToggler params={params} mobile={true} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <Image
        className={styles.menuHamb}
        src={hamb}
        width={39}
        height={14}
        alt=""
        onClick={() => setMenuOpen(!menuOpen)}
      />
    </>
  );
};

export default MobileMenuClient;

"use client";

import Image from "next/image";
import hamb from "@/public/hamb.svg";
import Link from "next/link";
import { useState } from "react";

import styles from "./MobileMenuClient.module.css";
import LanguageToggler from "../LanguageToggler/LanguageToggler";

const MobileMenuClient = ({ params, singletons }) => {
  const locale = params.locale;
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className={styles.backgroundWrapper}>
        <Image
          className={styles.menuHamb}
          src={hamb}
          width={39}
          height={14}
          alt=""
          onClick={() => setMenuOpen(!menuOpen)}
        />
      </div>
      {menuOpen && (
        <div className={styles.menuWrapper}>
          <ul>
            <li>
              <Link href={`/${locale}`}>
                <h2 className="h1">{locale === "ca" ? "obres" : locale === "es" ? "obras" : "work"}</h2>
              </Link>
            </li>
            {singletons.map(({ title, slug }) => (
              <li key={slug} className={styles.li}>
                <Link href={`/${locale}/${slug}`}>
                  <h2 className="h1">{title}</h2>
                </Link>
              </li>
            ))}
          </ul>
          <LanguageToggler params={params} mobile={true} />
        </div>
      )}
    </>
  );
};

export default MobileMenuClient;

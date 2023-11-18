import { getAllWorkTitlesAndSlugs } from "@/sanity/queries";
import NavClient from "./NavClient";

import styles from "./Nav.module.css";

const Nav = async ({ locale, className, hideOnMobile }) => {
  const workTitles = await getAllWorkTitlesAndSlugs(locale);

  return (
    <aside className={`${styles.aside} ${hideOnMobile ? styles.hidden : undefined} ${className}`}>
      <NavClient workTitles={workTitles} locale={locale} />
    </aside>
  );
};

export default Nav;

import { getAllWorkTitlesAndSlugs } from "@/sanity/queries";
import NavLink from "./NavLink";

import styles from "./Nav.module.css";

const Nav = async ({ locale, className }) => {
  const workTitles = await getAllWorkTitlesAndSlugs(locale);
  return (
    <aside className={`${styles.aside} ${className}`}>
      <nav className={styles.nav} data-lenis-prevent>
        <ul className={styles.navList}>
          {workTitles.map(({ title, slug }) => (
            <li key={slug} className={styles.li}>
              <NavLink locale={locale} slug={slug}>
                {title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Nav;

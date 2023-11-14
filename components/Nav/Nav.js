import { getAllWorkTitlesAndSlugs } from "@/sanity/queries";
import NavLink from "./NavLink";
import DownArrow from "../DownArrow/DownArrow";

import styles from "./Nav.module.css";

const Nav = async ({ locale, className }) => {
  const workTitles = await getAllWorkTitlesAndSlugs(locale);

  return (
    <aside className={`${styles.aside} ${className}`}>
      <nav className={`nav ${styles.nav}`} data-lenis-prevent>
        <ul className={styles.navList}>
          {workTitles.map(({ title, slug, image }) => (
            <li key={slug} className={styles.li}>
              <NavLink locale={locale} slug={slug} image={image}>
                {title}
              </NavLink>
            </li>
          ))}
        </ul>
        <DownArrow />
      </nav>
    </aside>
  );
};

export default Nav;

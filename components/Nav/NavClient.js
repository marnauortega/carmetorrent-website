"use client";

import { useState, useEffect } from "react";
import NavLink from "./NavLink";
import { FiChevronDown } from "react-icons/fi";

import styles from "./NavClient.module.css";

const NavClient = ({ workTitles, locale }) => {
  const [scrolledToBottom, setScrolledToBottom] = useState(false);
  const [scrolledToTop, setScrolledToTop] = useState(true);

  useEffect(() => {
    let containers = document.querySelectorAll(".nav");
    containers = [...containers];

    const handleScroll = (e) => {
      const container = e.target;
      if (container) {
        const scrollTop = container.scrollTop;
        const scrollHeight = container.scrollHeight;
        const clientHeight = container.clientHeight;

        setScrolledToTop(scrollTop === 0 ? true : false);
        setScrolledToBottom(scrollTop + clientHeight >= scrollHeight ? true : false);
      }
    };

    containers.forEach((container) => container.addEventListener("scroll", handleScroll));

    return () => {
      containers.forEach((container) => container.removeEventListener("scroll", handleScroll));
    };
  }, []);

  return (
    <>
      <nav className={`nav ${styles.nav} ${scrolledToBottom ? undefined : styles.clippedNav}`} data-lenis-prevent>
        <ul className={styles.navList}>
          {workTitles.map(({ title, slug, workType, image }) => (
            <li key={slug} className={styles.li}>
              <NavLink locale={locale} slug={slug} image={image}>
                {title}
                <span>{workType}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className={`${styles.arrowDown} ${scrolledToBottom ? styles.hidden : undefined}`}>
        <FiChevronDown />
      </div>
    </>
  );
};

export default NavClient;

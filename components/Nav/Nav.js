"use client";

import { useRef } from "react";
import { useScroll } from "framer-motion";

import ProgressBar from "../ProgressBar/ProgressBar";

import styles from "./Nav.module.css";

const Nav = ({ children }) => {
  const navRef = useRef(null);
  const { scrollYProgress } = useScroll({
    container: navRef,
  });

  return (
    <nav className={styles.nav} ref={navRef}>
      <ProgressBar scrollYProgress={scrollYProgress} />
      {children}
    </nav>
  );
};

export default Nav;

"use client";

import { useEffect, useState } from "react";
import { FiChevronDown } from "react-icons/fi";

import styles from "./DownArrow.module.css";

const DownArrow = () => {
  const [scrolledToBottom, setScrolledToBottom] = useState(false);
  const [scrolledToTop, setScrolledToTop] = useState(true);

  useEffect(() => {
    let containers = document.querySelectorAll(".nav");
    containers = [...containers];
    console.log(containers);

    const handleScroll = (e) => {
      const container = e.target;
      if (container) {
        const scrollTop = container.scrollTop;
        const scrollHeight = container.scrollHeight;
        const clientHeight = container.clientHeight;

        setScrolledToTop(scrollTop === 0 ? true : false);
        setScrolledToBottom(scrollTop + clientHeight >= scrollHeight ? true : false);

        console.log(scrollTop, typeof scrollTop);
      }
    };

    containers.forEach((container) => container.addEventListener("scroll", handleScroll));

    return () => {
      containers.forEach((container) => container.removeEventListener("scroll", handleScroll));
    };
  }, []);

  return (
    <>
      <div className={`${styles.upFade} ${scrolledToTop ? styles.hidden : undefined}`}></div>
      <div className={`${styles.arrowDown} ${scrolledToBottom ? styles.hidden : undefined}`}>
        <FiChevronDown />
      </div>
    </>
  );
};

export default DownArrow;

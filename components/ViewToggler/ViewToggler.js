"use client";

import Link from "next/link";
import { useContext, useEffect } from "react";
import { ViewContext } from "../Providers/ViewProvider";

import styles from "./ViewToggler.module.css";

const ViewToggler = ({ locale, list }) => {
  const { setListState } = useContext(ViewContext);

  useEffect(() => setListState(list));

  return (
    <div className={`${styles.wrapper} ${list ? styles.list : styles.images}`}>
      <Link href={`/${locale}`}>llistat</Link> | <Link href={`/${locale}/images`}>imatges</Link>
    </div>
  );
};

export default ViewToggler;

"use client";

import styles from "./Logo.module.css";
import { useContext } from "react";
import { usePathname, useRouter } from "next/navigation";
import { ViewContext } from "../Providers/ViewProvider";
import { FiChevronLeft as ChevronLeft } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

const Logo = ({ locale }) => {
  const { listState } = useContext(ViewContext);
  const router = useRouter();
  const pathname = usePathname();

  return (
    <header>
      <Link href={listState ? `/${locale}` : `/${locale}/images`} className={styles.logo}>
        <AnimatePresence>
          {pathname === `/${locale}` || pathname === `/${locale}/images` ? (
            ""
          ) : (
            <motion.div
              key="icon"
              initial={{ opacity: 0, x: 5 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -3 }}
              transition={{ type: "spring", stiffness: 200, damping: 30 }}
              className={styles.iconWrapper}>
              <ChevronLeft color="white" className={styles.icon} />
            </motion.div>
          )}
        </AnimatePresence>
      </Link>
    </header>
  );
};

export default Logo;

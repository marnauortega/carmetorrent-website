"use client";

import Link from "next/link";
import styles from "./Logo.module.css";
import { usePathname, useRouter } from "next/navigation";
import { FiChevronLeft as ChevronLeft } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import locales from "@/utils/locales";

const Logo = ({ locale }) => {
  const router = useRouter();
  const pathName = usePathname();

  return (
    <header>
      <Link href={locale ? `/${locale}` : `/${locales[0].id}`} className={styles.logo}>
        <AnimatePresence>
          {pathName.length <= 4 ? (
            ""
          ) : (
            <motion.div
              key="icon"
              initial={{ opacity: 0, x: 5 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -3 }}
              transition={{ type: "spring", stiffness: 200, damping: 30 }}
              className={styles.iconWrapper}
            >
              <ChevronLeft color="white" className={styles.icon} />
            </motion.div>
          )}
        </AnimatePresence>
      </Link>
    </header>
  );
};

export default Logo;

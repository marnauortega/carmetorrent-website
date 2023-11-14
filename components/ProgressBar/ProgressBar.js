import { motion } from "framer-motion";
import styles from "./ProgressBar.module.css";

const ProgressBar = ({ scrollYProgress }) => {
  return (
    <motion.div
      className={styles.progressBar}
      style={{ scaleY: scrollYProgress }}
      transition={{ delay: 3 }}
    ></motion.div>
  );
};

export default ProgressBar;

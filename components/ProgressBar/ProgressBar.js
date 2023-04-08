import { motion } from "framer-motion";
import styles from "./ProgressBar.module.css";

const ProgressBar = ({ scrollYProgress }) => {
  return <motion.div className={styles.progressBar} style={{ scaleY: scrollYProgress }}></motion.div>;
};

export default ProgressBar;

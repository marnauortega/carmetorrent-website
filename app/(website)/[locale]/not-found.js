// https://github.com/vercel/next.js/discussions/50034

import Logo from "@/components/Logo/Logo";

import styles from "./not-found.module.css";

const NotFound = async () => {
  return (
    <div>
      <Logo />
      <div className={styles.wrapper}>
        <h1 className="h1">Pàgina no trobada</h1>
        <p>La pàgina que busques no existeix</p>
      </div>
    </div>
  );
};

export default NotFound;

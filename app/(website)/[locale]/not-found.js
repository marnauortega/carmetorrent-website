// https://github.com/vercel/next.js/discussions/50034

import Logo from "@/components/Logo/Logo";
import { getColors } from "@/sanity/queries";

import styles from "./not-found.module.css";

const NotFound = async () => {
  const { logoColor } = await getColors();
  return (
    <div>
      <Logo locale="es" color={logoColor?.hex} />
      <div className={styles.wrapper}>
        <h1 className="h1">Pàgina no trobada</h1>
        <p>La pàgina que busques no existeix</p>
      </div>
    </div>
  );
};

export default NotFound;

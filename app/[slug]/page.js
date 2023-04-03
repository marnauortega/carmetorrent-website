import { postArray } from "@/data/postArray";
import { oneOffPostArray } from "@/data/oneOffPostArray";

import styles from "./page.module.css";

export const generateStaticParams = () => {
  const postSlugs = postArray.map((post) => post.slug);
  const oneOffPostSlugs = oneOffPostArray.map((post) => post.slug);
  return postSlugs.concat(oneOffPostSlugs);
};

const postPage = ({ params }) => {
  return (
    <div className={styles.content}>
      <p>{params.slug}</p>
    </div>
  );
};

export default postPage;

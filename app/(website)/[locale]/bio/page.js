import { PortableText } from "@portabletext/react";
import MyPortableTextComponents from "@/sanity/MyPortableTextComponents/MyPortableTextComponents";

import { getBio } from "@/sanity/queries";

import styles from "../[slug]/page.module.css";

// Static site generation
export const generateStaticParams = async () => {
  const [{ slug }] = await getBio();
  return slug;
};

const BioPage = async ({ params }) => {
  const [{ title, content }] = await getBio();
  return (
    <div className={styles.content}>
      <h1>{title}</h1>
      <PortableText value={content} components={MyPortableTextComponents} />
    </div>
  );
};

export default BioPage;

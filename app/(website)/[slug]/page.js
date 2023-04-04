import { workArray } from "@/data/workArray";
import { oneOffPostArray } from "@/data/oneOffPostArray";

import { createClient, groq } from "next-sanity";
import clientConfig from "@/sanity/clientConfig";

import styles from "./page.module.css";

// Query to fetch from Sanity
function getWork(workSlug) {
  return createClient(clientConfig).fetch(groq`
  *[_type == "work" && slug.current == "${workSlug}" ]{
    title,
    content
  }
  `);
}

// Static site generation
export const generateStaticParams = () => {
  const workSlugs = workArray.map((work) => work.slug);
  const oneOffPostSlugs = oneOffPostArray.map((work) => work.slug);
  return workSlugs.concat(oneOffPostSlugs);
};

const workPage = async ({ params }) => {
  const [{ title, content }] = await getWork(params.slug);
  console.log(title, content);
  return (
    <div className={styles.content}>
      <h1>{title}</h1>
    </div>
  );
};

export default workPage;

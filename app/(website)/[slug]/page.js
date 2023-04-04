import { workArray } from "@/data/workArray";
import { oneOffPostArray } from "@/data/oneOffPostArray";
import { PortableText } from "@portabletext/react";
import MyPortableTextComponents from "@/sanity/MyPortableTextComponents";

import { createClient, groq } from "next-sanity";
import clientConfig from "@/sanity/clientConfig";

import styles from "./page.module.css";

// Query to fetch from Sanity
function getWork(workSlug) {
  return createClient(clientConfig).fetch(groq`
  *[_type == "work" && slug.current == "${workSlug}" ]{
    title,
    chartToggled,
    chart,
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
  const [{ title, chartToggled, chart, content }] = await getWork(params.slug);
  console.log(chartToggled, chart);
  return (
    <div className={styles.content}>
      <h1>{title}</h1>
      {chartToggled && (
        <dl>
          <dt className={styles.chartTitle}>Lugar</dt>
          <dd className={styles.chartContent}>{chart.place}</dd>
          <dt className={styles.chartTitle}>Ciclo</dt>
          <dd className={styles.chartContent}>{chart.cycle}</dd>
          <dt className={styles.chartTitle}>Año</dt>
          <dd className={styles.chartContent}>{chart.year}</dd>
        </dl>
      )}
      <PortableText value={content} components={MyPortableTextComponents} />
    </div>
  );
};

export default workPage;

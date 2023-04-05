import { oneOffPostArray } from "@/data/oneOffPostArray";
import { PortableText } from "@portabletext/react";
import MyPortableTextComponents from "@/sanity/MyPortableTextComponents";

import { getWork, getAllWorkSlugs } from "@/sanity/queries/queries";

import styles from "./page.module.css";

// Static site generation
export const generateStaticParams = async () => {
  const workSlugs = await getAllWorkSlugs();
  const oneOffPostSlugs = oneOffPostArray.map((work) => work.slug);
  return workSlugs.concat(oneOffPostSlugs);
};

const WorkPage = async ({ params }) => {
  const [{ title, chartToggled, chart, content }] = await getWork(params.slug);
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

export default WorkPage;

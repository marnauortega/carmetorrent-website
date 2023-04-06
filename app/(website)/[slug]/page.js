import { PortableText } from "@portabletext/react";
import MyPortableTextComponents from "@/sanity/MyPortableTextComponents/MyPortableTextComponents";

import { getWork, getAllWorkSlugs } from "@/sanity/queries";

import styles from "./page.module.css";

// Static site generation
export const generateStaticParams = async () => {
  const workSlugs = await getAllWorkSlugs();
  return workSlugs;
};

const WorkPage = async ({ params }) => {
  const [{ title, chartToggled, chart, content }] = await getWork(params.slug);
  return (
    <div className={styles.content}>
      <h1 className={styles.heading}>{title}</h1>
      {chartToggled && (
        <dl className={styles.chart}>
          <dt className={styles.chartTitle}>Lugar</dt>
          <dd className={styles.chartContent}>{chart.place}</dd>
          <dt className={styles.chartTitle}>Ciclo</dt>
          <dd className={styles.chartContent}>{chart.cycle}</dd>
          <dt className={styles.chartTitle}>Año</dt>
          <dd className={styles.chartContent}>{chart.year}</dd>
        </dl>
      )}
      <div>
        <PortableText value={content} components={MyPortableTextComponents} />
      </div>
      {/* For Contact page */}
      {/* {
        form && (
          <form>

          </form>
        )
      } */}
    </div>
  );
};

export default WorkPage;

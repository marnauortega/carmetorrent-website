import { Fragment } from "react";
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
  // Text is short if it has less than three paragraphs and none of them are longer than 500 characters
  const textIsShort =
    content?.length <= 3 &&
    content?.filter((paragraph) => paragraph._type === "block" && paragraph?.children[0]?.text?.length > 500).length ===
      0;

  return (
    <div className={styles.content}>
      <h1 className={styles.heading}>{title}</h1>
      {chartToggled && (
        <dl className={`${styles.chart} ${textIsShort ? styles.chartInsideLayout : ""}`}>
          {chart?.map(({ title, content }) => (
            <Fragment key={title}>
              <dt className={styles.chartTitle}>{title}</dt>
              <dd className={styles.chartContent}>{content}</dd>
            </Fragment>
          ))}
        </dl>
      )}
      <div className={styles.contentBody}>
        <PortableText value={content} components={MyPortableTextComponents} />
      </div>
    </div>
  );
};

export default WorkPage;

import LanguageToggler from "@/components/LanguageToggler/LanguageToggler";
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
  const work = await getWork(params.slug, params.locale);
  const workIsNotEmpty = !!work?.length;

  let title, chartToggled, chart, content;

  if (workIsNotEmpty) {
    [{ title, chartToggled, chart, content }] = work;
  }

  return (
    <>
      <LanguageToggler params={params} />
      {workIsNotEmpty && (
        <div className={styles.content}>
          <h1 className={styles.heading}>{title}</h1>
          {chartToggled && (
            <dl className={styles.chart}>
              {chart?.map(({ title, content }) => (
                <Fragment key={title}>
                  <dt className={styles.chartTitle}>{title}</dt>
                  <dd className={styles.chartContent}>
                    <PortableText value={content} components={MyPortableTextComponents} />
                  </dd>
                </Fragment>
              ))}
            </dl>
          )}
          <div className={styles.contentBody}>
            <PortableText value={content} components={MyPortableTextComponents} />
          </div>
        </div>
      )}
    </>
  );
};

export default WorkPage;

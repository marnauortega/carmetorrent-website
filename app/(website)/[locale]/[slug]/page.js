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

  let title, cycles, content, chart;

  if (workIsNotEmpty) {
    [{ title, cycles, content, chart }] = work;
  }

  return (
    <>
      <LanguageToggler params={params} />
      {workIsNotEmpty && (
        <div className={styles.content}>
          <h1 className={styles.heading}>{title}</h1>
          {cycles?.length > 0 && (
            <dl className={styles.desktopCycles}>
              {cycles?.map(({ year, content }) => (
                <Fragment key={year}>
                  <dt className={styles.cyclesYear}>{year}</dt>
                  <dd className={styles.cyclesContent}>
                    <PortableText value={content} components={MyPortableTextComponents} />
                  </dd>
                </Fragment>
              ))}
            </dl>
          )}
          <div className={styles.contentBody}>
            <PortableText value={content} components={MyPortableTextComponents} />
            {chart?.length > 0 && (
              <>
                <p className={styles.chartHeading}>Fitxa Artística</p>
                {chart?.map(({ title, content }) => (
                  <div key={title} className={styles.chartContent}>
                    <span className={styles.chartTitle}>{title}: </span>
                    <PortableText value={content} components={MyPortableTextComponents} />
                  </div>
                ))}
              </>
            )}
            {cycles?.length > 0 && (
              <dl className={styles.mobileCycles}>
                {cycles?.map(({ year, content }) => (
                  <Fragment key={year}>
                    <dt className={styles.cyclesYear}>{year}</dt>
                    <dd className={styles.cyclesContent}>
                      <PortableText value={content} components={MyPortableTextComponents} />
                    </dd>
                  </Fragment>
                ))}
              </dl>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default WorkPage;

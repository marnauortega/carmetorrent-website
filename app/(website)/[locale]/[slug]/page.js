import LanguageToggler from "@/components/LanguageToggler/LanguageToggler";
import { Fragment } from "react";
import { PortableText } from "@portabletext/react";
import MyPortableTextComponents from "@/sanity/MyPortableTextComponents/MyPortableTextComponents";
import MobileMenu from "@/components/MobileMenu/MobileMenu";
import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";

import { getWork, getAllWorkSlugs, getAllWorkTitlesAndSlugs } from "@/sanity/queries";

import styles from "./page.module.css";

// Static site generation
export const generateStaticParams = async () => {
  const workSlugs = await getAllWorkSlugs();
  return workSlugs;
};

const WorkPage = async ({ params }) => {
  const locale = params.locale;
  const work = await getWork(params.slug, locale);
  const workIsNotEmpty = !!work?.length;

  let title, slug, cycles, content, chart, translations;

  if (workIsNotEmpty) {
    [{ title, slug, cycles, content, chart, translations }] = work;
  }

  const works = await getAllWorkTitlesAndSlugs(locale);
  const worksIsNotEmpty = !!works?.length;

  let nextWork;
  let nextWorkIsNotEmpty;

  if (worksIsNotEmpty) {
    for (let i = 0; i < works.length; i++) {
      if (works[i].slug === slug) {
        nextWork = works.length !== i + 1 ? works[i + 1] : works[0];
      }
    }
    nextWorkIsNotEmpty = !!Object.keys(nextWork)?.length;
  }

  return (
    <>
      <LanguageToggler params={params} translations={translations} />
      <MobileMenu params={params} />
      {workIsNotEmpty && (
        <div className={styles.content}>
          <h1 className={styles.heading}>{title}</h1>
          {cycles?.length > 0 && (
            <dl className={styles.desktopCycles}>
              {cycles?.map(({ year, content }) => (
                <Fragment key={year}>
                  <dt className={`h2 ${styles.cyclesYear}`}>{year}</dt>
                  <dd className={styles.cyclesContent}>
                    <PortableText value={content} components={MyPortableTextComponents} />
                  </dd>
                </Fragment>
              ))}
            </dl>
          )}
          <div className={styles.contentBody}>
            <div className={styles.portableTextWrapper}>
              <PortableText value={content} components={MyPortableTextComponents} />
            </div>
            {chart?.length > 0 && (
              <>
                <p className={`h2 ${styles.chartHeading}`}>
                  {locale === "ca" ? "Fitxa Artística" : locale === "es" ? "Ficha Artística" : "Cast"}
                </p>
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
                    <dt className={`h2 ${styles.cyclesYear}`}>{year}</dt>
                    <dd className={styles.cyclesContent}>
                      <PortableText value={content} components={MyPortableTextComponents} />
                    </dd>
                  </Fragment>
                ))}
              </dl>
            )}
            <Link href={`/${locale}/${nextWork.slug}`} className={styles.nextWork}>
              <p className="h2">{locale === "ca" ? "Següent obra" : locale === "es" ? "Sigüente obra" : "Next work"}</p>
              <div className={styles.nextTitle}>
                <span>{nextWork.title}</span>
                <FiChevronRight className={styles.icon} />
              </div>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default WorkPage;

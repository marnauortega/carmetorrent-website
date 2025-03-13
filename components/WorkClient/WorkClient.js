"use client";

import LanguageToggler from "@/components/LanguageToggler/LanguageToggler";
import { Fragment } from "react";
import { PortableText } from "@portabletext/react";
import MyPortableTextComponents from "@/sanity/MyPortableTextComponents/MyPortableTextComponents";
import { motion } from "framer-motion";

import styles from "./WorkClient.module.css";

const WorkClient = ({ work, nextWork, params }) => {
  const locale = params.locale;
  const [{ title, cycles, content, chart }] = work;

  return (
    <>
      <motion.div
        className={styles.contentWrapper}
        initial={{ x: 30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffmess: 120, damping: 20 }}>
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
                  {locale === "ca" ? "fitxa artística" : locale === "es" ? "ficha artística" : "cast"}
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
            {/* <Link href={`/${locale}/work/${nextWork.slug}`} className={styles.nextWork}>
              <p className="h2">{locale === "ca" ? "Següent obra" : locale === "es" ? "Sigüente obra" : "Next work"}</p>
              <div className={styles.nextTitle}>
                <span>{nextWork.title}</span>
                <FiChevronRight className={styles.icon} />
              </div>
            </Link>  */}
          </div>
        </div>
      </motion.div>

      <LanguageToggler params={params} />
    </>
  );
};

export default WorkClient;

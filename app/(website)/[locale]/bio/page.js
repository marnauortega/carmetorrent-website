import LanguageToggler from "@/components/LanguageToggler/LanguageToggler";
import { PortableText } from "@portabletext/react";
import MyPortableTextComponents from "@/sanity/MyPortableTextComponents/MyPortableTextComponents";
import MobileMenu from "@/components/MobileMenu/MobileMenu";

import { getPage } from "@/sanity/queries";

import styles from "../[slug]/page.module.css";

export const dynamic = "force-static";
export const revalidate = 60;

const BioPage = async ({ params }) => {
  const [{ title, content }] = await getPage("bio", params.locale);
  return (
    <>
      <LanguageToggler params={params} />
      <MobileMenu params={params} />
      <div className={styles.content}>
        <h1 className={styles.heading}>{title}</h1>
        <PortableText value={content} components={MyPortableTextComponents} />
      </div>
    </>
  );
};

export default BioPage;

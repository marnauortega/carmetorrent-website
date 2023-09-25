import LanguageToggler from "@/components/LanguageToggler/LanguageToggler";
import { PortableText } from "@portabletext/react";
import MyPortableTextComponents from "@/sanity/MyPortableTextComponents/MyPortableTextComponents";
import MobileMenu from "@/components/MobileMenu/MobileMenu";
import { getGoogleDescriptions, getPage } from "@/sanity/queries";

import styles from "@/components/WorkClient/WorkClient.module.css";

export const dynamic = "force-static";
export const revalidate = 60;

export async function generateMetadata({ params: { locale } }) {
  const [{ title }] = await getPage("bio", locale);
  const [{ bioDescription }] = await getGoogleDescriptions(locale);
  return {
    title,
    description: bioDescription,
  };
}

const BioPage = async ({ params }) => {
  const [{ title, content }] = await getPage("bio", params.locale);
  return (
    <>
      <div className={styles.content}>
        <h1 className={styles.heading}>{title}</h1>
        <div className={styles.portableTextWrapper}>
          <PortableText value={content} components={MyPortableTextComponents} />
        </div>
      </div>
      <LanguageToggler params={params} />
      <MobileMenu params={params} />
    </>
  );
};

export default BioPage;

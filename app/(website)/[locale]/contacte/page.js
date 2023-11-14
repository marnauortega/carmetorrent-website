import LanguageToggler from "@/components/LanguageToggler/LanguageToggler";
import { PortableText } from "@portabletext/react";
import MyPortableTextComponents from "@/sanity/MyPortableTextComponents/MyPortableTextComponents";
import MobileMenu from "@/components/MobileMenu/MobileMenu";

import { getPage, getGoogleDescriptions } from "@/sanity/queries";

import styles from "@/components/WorkClient/WorkClient.module.css";

export const dynamic = "force-static";
export const revalidate = 60;

export async function generateMetadata({ params: { locale } }) {
  const [{ title }] = await getPage("contact", locale);
  const [{ contactDescription }] = await getGoogleDescriptions(locale);
  return {
    title,
    description: contactDescription,
  };
}

const ContactPage = async ({ params }) => {
  const [{ title, content }] = await getPage("contact", params.locale);
  return (
    <>
      <div className={styles.content}>
        <h1 className={styles.heading}>{title}</h1>
        <PortableText value={content} components={MyPortableTextComponents} />
        {/* {
        form && (
          <form>

          </form>
        )
      } */}
      </div>
      <LanguageToggler params={params} />
      <MobileMenu params={params} />
    </>
  );
};

export default ContactPage;

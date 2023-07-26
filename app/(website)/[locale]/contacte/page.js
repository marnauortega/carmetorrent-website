import LanguageToggler from "@/components/LanguageToggler/LanguageToggler";
import { PortableText } from "@portabletext/react";
import MyPortableTextComponents from "@/sanity/MyPortableTextComponents/MyPortableTextComponents";

import { getContact } from "@/sanity/queries";

import styles from "../[slug]/page.module.css";

export const dynamic = "force-static";
export const revalidate = 60;

const ContactPage = async ({ params }) => {
  const [{ title, content }] = await getContact(params.locale);
  return (
    <>
      <LanguageToggler params={params} />
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
    </>
  );
};

export default ContactPage;

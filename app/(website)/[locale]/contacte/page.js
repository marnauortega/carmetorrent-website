import LanguageToggler from "@/components/LanguageToggler/LanguageToggler";
import { PortableText } from "@portabletext/react";
import MyPortableTextComponents from "@/sanity/MyPortableTextComponents/MyPortableTextComponents";

import { getContact } from "@/sanity/queries";

import styles from "../[slug]/page.module.css";

// Static site generation
// export const generateStaticParams = async () => {
//   const [{ slug }] = await getContact();
//   return slug;
// };

const ContactPage = async ({ params }) => {
  const [{ title, content }] = await getContact(params.locale);
  return (
    <>
      <LanguageToggler params={params} />
      <div className={styles.content}>
        <h1>{title}</h1>
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

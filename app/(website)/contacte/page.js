import { PortableText } from "@portabletext/react";
import MyPortableTextComponents from "@/sanity/MyPortableTextComponents";

import { getContact } from "@/sanity/queries";

import styles from "../[slug]/page.module.css";

// Static site generation
export const generateStaticParams = async () => {
  const [{ slug }] = await getContact();
  return slug;
};

const ContactPage = async ({ params }) => {
  const [{ title, content }] = await getContact();
  return (
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
  );
};

export default ContactPage;

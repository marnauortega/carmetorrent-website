import LanguageToggler from "@/components/LanguageToggler/LanguageToggler";
import { PortableText } from "@portabletext/react";
import MyPortableTextComponents from "@/sanity/MyPortableTextComponents/MyPortableTextComponents";
import MobileMenu from "@/components/MobileMenu/MobileMenu";
import red from "../../../../public/red.svg";
import eu from "../../../../public/eu.svg";
import Image from "next/image";

import { getPage, getGoogleDescriptions } from "@/sanity/queries";

import contactStyles from "./page.module.css";
import styles from "@/components/WorkClient/WorkClient.module.css";

export const dynamic = "force-static";
// export const revalidate = 1;

export async function generateMetadata({ params: { locale } }) {
  const { title } = await getPage("contact", locale);
  const [{ contactDescription }] = await getGoogleDescriptions(locale);
  return {
    title,
    description: contactDescription,
  };
}

const ContactPage = async ({ params }) => {
  const { title, content } = await getPage("contact", params.locale);
  return (
    <>
      <div className={styles.content}>
        <h1 className={styles.heading}>{title}</h1>
        <PortableText value={content} components={MyPortableTextComponents} />

        <div className={contactStyles.funded}>
          <p>
            {params.locale === "ca"
              ? "Amb el finançament de:"
              : params.locale === "es"
                ? "Con el apoyo de:"
                : params.locale === "en"
                  ? "Funded by:"
                  : ""}
          </p>
          <Image src={red} width={201} height={61} alt="funded by red.es logo" />
          <Image src={eu} width={197} height={44} alt="funded by european union logo" />
        </div>

        {/* {params.locale === "es" &&}
        {params.locale === "en" &&} */}
      </div>
      <LanguageToggler params={params} />
      <MobileMenu params={params} />
    </>
  );
};

export default ContactPage;

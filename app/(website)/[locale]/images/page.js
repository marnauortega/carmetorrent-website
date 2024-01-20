import { getAllWorkImages } from "@/sanity/queries";
import LanguageToggler from "@/components/LanguageToggler/LanguageToggler";
import MobileMenu from "@/components/MobileMenu/MobileMenu";
import ViewToggler from "@/components/ViewToggler/ViewToggler";
import MySanityImage from "@/components/MySanityImage/MySanityImage";
import Link from "next/link";

import styles from "./page.module.css";

export const dynamic = "force-static";
export const revalidate = 1;

const Images = async ({ params }) => {
  const workImages = await getAllWorkImages(params.locale);
  console.log(workImages);
  return (
    <>
      <LanguageToggler params={params} />
      <div className={styles.imagesWrapper}>
        {workImages.map(
          (image) =>
            image.image && (
              <Link href={`/${params.locale}/work/${image.slug}`}>
                <MySanityImage image={image.image} className={styles.image} />
              </Link>
            )
        )}
      </div>
      <ViewToggler locale={params.locale} />
      <MobileMenu params={params} />
    </>
  );
};

export default Images;

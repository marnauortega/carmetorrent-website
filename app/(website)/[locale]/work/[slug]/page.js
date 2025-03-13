import { notFound } from "next/navigation";
import WorkClient from "@/components/WorkClient/WorkClient";
import { getWork, getTitleFromSlug } from "@/sanity/queries";
import Nav from "@/components/Nav/Nav";
import MobileMenu from "@/components/MobileMenu/MobileMenu";

export const dynamic = "force-static";
// export const revalidate = 1;

// Static site generation
// export const generateStaticParams = async () => {
//   const workSlugs = await getAllWorkSlugs();
//   console.log(workSlugs);
//   return workSlugs;
// };

export async function generateMetadata({ params: { slug } }) {
  const title = await getTitleFromSlug(slug);
  console.log(title);
  return {
    title: title,
  };
}

const WorkPage = async ({ params }) => {
  const locale = params.locale;
  const work = await getWork(params.slug, locale);

  if (!work?.length) return notFound();

  // const [{ slug }] = work;
  // const works = await getAllWorkTitlesAndSlugs(locale);

  // let nextWork;
  // for (let i = 0; i < works.length; i++) {
  //   if (works[i].slug === slug) {
  //     nextWork = works.length !== i + 1 ? works[i + 1] : works[0];
  //   }
  // }

  return (
    <>
      <Nav locale={params.locale} hideOnMobile={true} />
      <WorkClient
        work={work}
        // nextWork={nextWork}
        params={params}
      />
      <MobileMenu params={params} />
    </>
  );
};

export default WorkPage;

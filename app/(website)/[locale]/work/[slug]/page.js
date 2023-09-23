import { notFound } from "next/navigation";
import WorkClient from "@/components/WorkClient/WorkClient";
import { getWork, getAllWorkSlugs, getAllWorkTitlesAndSlugs } from "@/sanity/queries";

// Static site generation
export const generateStaticParams = async () => {
  const workSlugs = await getAllWorkSlugs();
  return workSlugs;
};

const WorkPage = async ({ params }) => {
  const locale = params.locale;
  const work = await getWork(params.slug, locale);

  if (!work?.length) return notFound();

  const [{ slug }] = work;
  const works = await getAllWorkTitlesAndSlugs(locale);

  let nextWork;
  for (let i = 0; i < works.length; i++) {
    if (works[i].slug === slug) {
      nextWork = works.length !== i + 1 ? works[i + 1] : works[0];
    }
  }

  return <WorkClient work={work} nextWork={nextWork} params={params} />;
};

export default WorkPage;

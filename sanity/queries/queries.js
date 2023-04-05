import { createClient, groq } from "next-sanity";
import clientConfig from "@/sanity/clientConfig";

export function getWork(workSlug) {
  return createClient(clientConfig).fetch(groq`
    *[_type == "work" && slug.current == "${workSlug}" ]{
      title,
      chartToggled,
      chart,
      content
    }
    `);
}

export function getAllWorkSlugs() {
  return createClient(clientConfig).fetch(groq`
    *[_type == "work"].slug.current`);
}

export function getAllWorkTitlesAndSlugs() {
  return createClient(clientConfig).fetch(groq`
    *[_type == "work"]{title, "slug": slug.current}`);
}

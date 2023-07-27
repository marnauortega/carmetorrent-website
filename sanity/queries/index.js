import { createClient, groq } from "next-sanity";
import clientConfig from "@/sanity/clientConfig";

export function getWork(workSlug, locale) {
  return createClient(clientConfig).fetch(groq`
    *[_type == "work" && slug.current == "${workSlug}" && language match "${locale}*" ]{
      title,
      "slug": slug.current,
      cycles,
      content,
      "chart": chart[]{title, content},
      "translations": *[_type == "translation.metadata" && references(^._id)].translations[].value->{
        "slug": slug.current,
        language
      },
    }
    `);
}

export function getAllWorkSlugs() {
  return createClient(clientConfig).fetch(groq`
    *[_type == "work"]{
      "locale": language,
      "slug": slug.current,
    }
    `);
}

export function getAllWorkTitlesAndSlugs(locale) {
  return createClient(clientConfig).fetch(groq`
    *[_type == "work" && language match "${locale}*"]|order(orderRank) {
      title,
      "slug": slug.current 
    }
    `);
}

export function getPage(page, locale) {
  return createClient(clientConfig).fetch(groq`
    *[_type == "${page}" && language match "${locale}*"]{
      title,
      "slug": slug.current,
      content,
    }`);
}

export function getSingletons(locale) {
  return createClient(clientConfig).fetch(groq`
    *[(_type == "bio" || _type == "contact") && language match "${locale}*"] | order(title asc){
      title,
      "slug": slug.current,
    }`);
}

export function getImageColor(imageId) {
  return createClient(clientConfig).fetch(groq`
  *[_type == "work"].content[]
  [_type == "image"]
  [asset._ref == "${imageId}"]
  .asset->.metadata.palette.darkVibrant.background`);
}

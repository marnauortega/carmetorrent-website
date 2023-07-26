import { createClient, groq } from "next-sanity";
import clientConfig from "@/sanity/clientConfig";

export function getWork(workSlug, locale) {
  return createClient(clientConfig).fetch(groq`
    *[_type == "work" && slug.current == "${workSlug}" && language match "${locale}*" ]{
      title,
      cycles,
      content,
      "chart": chart[]{title, content}
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
    *[_type == "work" && language match "${locale}*"]|order(orderRank){title, "slug": slug.current}`);
}

export function getBio(locale) {
  return createClient(clientConfig).fetch(groq`
    *[_type == "bio" && language match "${locale}*"]{
      title,
      "slug": slug.current,
      content,
    }`);
}

export function getContact(locale) {
  return createClient(clientConfig).fetch(groq`
    *[_type == "contact" && language match "${locale}*"]{
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

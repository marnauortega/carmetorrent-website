import { createClient, groq } from "next-sanity";
import clientConfig from "@/sanity/clientConfig";

export function getWork(workSlug) {
  return createClient(clientConfig).fetch(groq`
    *[_type == "work" && slug.current == "${workSlug}" ]{
      title,
      chartToggled,
      "chart": chart[]{title, content},
      content
    }
    `);
}

export function getAllWorkSlugs() {
  return createClient(clientConfig).fetch(groq`
    *[_type == "work"].slug.current`);
}

export function getAllWorkTitlesAndSlugs(locale) {
  return createClient(clientConfig).fetch(groq`
    *[_type == "work" && __i18n_lang match "${locale}*"]|order(orderRank){title, "slug": slug.current}`);
}

export function getBio() {
  return createClient(clientConfig).fetch(groq`
    *[_type == "bio"]{
      title,
      "slug": slug.current,
      content,
    }`);
}

export function getContact() {
  return createClient(clientConfig).fetch(groq`
    *[_type == "contact"]{
      title,
      "slug": slug.current,
      content,
    }`);
}

export function getSingletons(locale) {
  return createClient(clientConfig).fetch(groq`
    *[(_type == "bio" || _type == "contact") && __i18n_lang match "${locale}*"] | order(title asc){
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

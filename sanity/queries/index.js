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

export function getAllWorkImages(locale) {
  return createClient(clientConfig).fetch(groq`
    *[_type == "work" && language match "${locale}*"]|order(
      *[_type == "translation.metadata" && references(^._id)][0].translations[_key == "ca"][0].value->orderRank
      ) {
      "slug": slug.current,
      image,
    }
    `);
}

export function getAllWorkTitlesAndSlugs(locale) {
  return createClient(clientConfig).fetch(groq`
    *[_type == "work" && language match "${locale}*"]|order(
      *[_type == "translation.metadata" && references(^._id)][0].translations[_key == "ca"][0].value->orderRank
      ) {
      title,
      "slug": slug.current,
      workType,
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
      "translations": *[_type == "translation.metadata" && references(^._id)].translations[].value->{
        slug,
        language
      },
    }`);
}

export function getImageColor(imageId) {
  return createClient(clientConfig).fetch(groq`
  *[_type == "work"].content[]
  [_type == "image"]
  [asset._ref == "${imageId}"]
  .asset->.metadata.palette.darkVibrant.background`);
}

export function getColors() {
  return createClient(clientConfig).fetch(
    groq`
  *[_type == "colors"]`,
    { cache: "no-store", next: { tags: ["revalidate"] } }
  );
}

export function getGoogleDescriptions(locale) {
  return createClient(clientConfig).fetch(
    groq`
    *[_type == "googleDescriptions" && language match "${locale}*"] {
      homeDescription,
      studioDescription,
      practiceDescription,
      projectsDescription,
    }
    `
  );
}

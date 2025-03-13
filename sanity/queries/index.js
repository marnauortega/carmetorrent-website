import { createClient, groq } from "next-sanity";
import clientConfig from "@/sanity/clientConfig";

export function getWork(workSlug, locale) {
  return createClient(clientConfig).fetch(
    groq`
    *[_type == "work" && slug.current == "${workSlug}" ]{
      title,
      "slug": slug.current,
      "cycles": cycles[]{
        year,
        "${locale}" == 'ca' => {"content": descriptionCa} ,
        "${locale}" == 'es' => {"content": descriptionEs},
        "${locale}" == 'en' => {"content": descriptionEn},
      },
      "${locale}" == 'ca' => {"content": contentCa},
      "${locale}" == 'es' => {"content": contentEs},
      "${locale}" == 'en' => {"content": contentEn},
      "chart": chart[]{
        "title": internationalizedTitle[_key == "${locale}"][0].value, 
        "${locale}" == 'ca' => {"content": descriptionCa} ,
        "${locale}" == 'es' => {"content": descriptionEs},
        "${locale}" == 'en' => {"content": descriptionEn},
      },
    }
    `,
    { cache: "no-store" }
  );
}

export function getAllWorkSlugs() {
  return createClient(clientConfig).fetch(
    groq`
    *[_type == "work"]{
      "slug": slug.current,
    }
    `,
    { cache: "no-store" }
  );
}

export function getTitleFromSlug(slug) {
  return createClient(clientConfig).fetch(
    groq`
    *[_type == "work" && slug.current == "${slug}" ]{
      title 
    }[0].title
    `,
    { cache: "no-store" }
  );
}

export function getAllWorkImages(locale) {
  return createClient(clientConfig).fetch(
    groq`
    *[_type == "work"]|order(
      *[_type == "translation.metadata" && references(^._id)][0].translations[_key == "ca"][0].value->orderRank
      ) {
      "slug": slug.current,
      image,
    }
    `,
    { cache: "no-store" }
  );
}

export function getAllWorkTitlesAndSlugs(locale) {
  return createClient(clientConfig).fetch(
    groq`
    *[_type == "work"]|order(orderRank) {
      title,
      "slug": slug.current,
      workType,
    }
    `,
    { cache: "no-store", next: { tags: ["nav"] } }
  );
}

export function getPage(page, locale) {
  return createClient(clientConfig).fetch(
    groq`
    *[_type == "${page}"]{
      _id,
      "title": internationalizedTitle[_key == "${locale}"][0].value,
      "slug": slug.current,
      "${locale}" == 'ca' => {"content": contentCa},
      "${locale}" == 'es' => {"content": contentEs},
      "${locale}" == 'en' => {"content": contentEn},
    }[0]`,
    { cache: "no-store" }
  );
}

export function getSingletons(locale) {
  return createClient(clientConfig).fetch(
    groq`
    *[(_type == "bio" || _type == "contact")]{
      "title": internationalizedTitle[_key == "${locale}"][0].value,
      "slug": slug.current,
    }`,
    { cache: "no-store" }
  );
}

export function getImageColor(imageId) {
  return createClient(clientConfig).fetch(
    groq`
  *[_type == "work"].content[]
  [_type == "image"]
  [asset._ref == "${imageId}"]
  .asset->.metadata.palette.darkVibrant.background`,
    { cache: "no-store" }
  );
}

export function getColors() {
  return createClient(clientConfig).fetch(
    groq`
  *[_type == "colors"][0]`,
    { cache: "no-store", next: { tags: ["revalidate"] } }
  );
}

export function getGoogleDescriptions(locale) {
  return createClient(clientConfig).fetch(
    groq`
    *[_type == "googleDescriptions"] {
      homeDescription,
      studioDescription,
      practiceDescription,
      projectsDescription,
    }
    `,
    { cache: "no-store" }
  );
}

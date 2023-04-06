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

export function getSingletons() {
  return createClient(clientConfig).fetch(groq`
    *[_type == "bio" || _type == "contact"]{
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

  // Many items
  // *[_type == "work" && slug.current == "eclipse-2015"].content[]{
  //     _type == "image" => {
  //       asset->{
  //         metadata{
  //           palette {
  //             darkMuted {
  //               background
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }`
}

"use client";

import { postArray } from "@/data/postArray";
import { oneOffPostArray } from "@/data/oneOffPostArray";

export const generateStaticParams = () => {
  const postSlugs = postArray.map((post) => post.slug);
  const oneOffPostSlugs = oneOffPostArray.map((post) => post.slug);
  return postSlugs.concat(oneOffPostSlugs);
};

const postPage = ({ params }) => {
  return <div>{params.slug}</div>;
};

export default postPage;

import { orderRankField, orderRankOrdering } from "@sanity/orderable-document-list";
import { BsFolder as icon } from "react-icons/bs";
import { isUniqueOtherThanLanguage } from "../utils/isUniqueOtherThanLanguage";
import portableText from "./portableText";
import MySanityImage from "@/components/MySanityImage/MySanityImage";

export default {
  name: "work",
  title: "Obres",
  type: "document",
  icon,
  fields: [
    orderRankField({
      type: "category",
    }),
    {
      name: "title",
      title: "Títol",
      type: "string",
    },
    {
      name: "slug",
      title: "URL",
      type: "slug",
      options: {
        source: "title",
        isUnique: isUniqueOtherThanLanguage,
      },
    },
    {
      name: "workType",
      title: "Tipus d'obra",
      type: "string",
    },
    {
      name: "image",
      title: "Imatge",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "cycles",
      title: "Cicles",
      type: "array",
      of: [
        {
          name: "row",
          title: "Línea",
          type: "object",
          fields: [
            {
              name: "year",
              title: "Any",
              type: "string",
            },
            portableText,
          ],
          preview: {
            select: {
              title: "year",
              subtitle: "content",
            },
          },
        },
      ],
    },
    portableText,
    {
      name: "chart",
      title: "Fitxa artística",
      type: "array",
      of: [
        {
          name: "row",
          title: "Línea",
          type: "object",
          fields: [
            {
              name: "title",
              title: "Títol",
              type: "string",
            },
            portableText,
          ],
          preview: {
            select: {
              title: "title",
              subtitle: "content",
            },
          },
        },
      ],
    },
    {
      name: "language",
      type: "string",
      readOnly: true,
      hidden: true,
    },
  ],
  orderings: [orderRankOrdering],
  preview: {
    select: {
      title: "title",
      language: "language",
      media: "image",
    },
    prepare({ title, language, media }) {
      return {
        title: title,
        subtitle: language.toUpperCase(),
        media: media?.asset !== undefined ? <MySanityImage image={media} /> : undefined,
      };
    },
  },
};

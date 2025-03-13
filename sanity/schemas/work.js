import { orderRankField, orderRankOrdering } from "@sanity/orderable-document-list";
import { BsFolder as icon } from "react-icons/bs";
import { isUniqueOtherThanLanguage } from "../utils/isUniqueOtherThanLanguage";
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
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "URL",
      type: "slug",
      options: {
        source: "title",
        isUnique: isUniqueOtherThanLanguage,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "workType",
      title: "Tipus d'obra",
      type: "string",
    },
    // {
    //   name: "image",
    //   title: "Imatge",
    //   type: "image",
    //   options: { hotspot: true },
    // },
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
            {
              name: "descriptionCa",
              title: "Descripció (CA)",
              type: "array",
              of: [
                { type: "block" },
                {
                  type: "image",
                  options: {
                    metadata: ["blurhash", "lqip", "palette"],
                  },
                },
              ],
            },
            {
              name: "descriptionEs",
              title: "Descripció (ES)",
              type: "array",
              of: [
                { type: "block" },
                {
                  type: "image",
                  options: {
                    metadata: ["blurhash", "lqip", "palette"],
                  },
                },
              ],
            },
            {
              name: "descriptionEn",
              title: "Descripció (EN)",
              type: "array",
              of: [
                { type: "block" },
                {
                  type: "image",
                  options: {
                    metadata: ["blurhash", "lqip", "palette"],
                  },
                },
              ],
            },
          ],
          preview: {
            select: {
              title: "year",
              subtitle: "descriptionCa",
            },
          },
        },
      ],
    },
    {
      name: "contentCa",
      title: "Contingut (CA)",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          options: {
            metadata: ["blurhash", "lqip", "palette"],
          },
        },
      ],
    },
    {
      name: "contentEs",
      title: "Contingut (ES)",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          options: {
            metadata: ["blurhash", "lqip", "palette"],
          },
        },
      ],
    },
    {
      name: "contentEn",
      title: "Contingut (EN)",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          options: {
            metadata: ["blurhash", "lqip", "palette"],
          },
        },
      ],
    },
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
              name: "internationalizedTitle",
              title: "Títol",
              type: "internationalizedArrayString",
            },
            {
              name: "descriptionCa",
              title: "Descripció (CA)",
              type: "array",
              of: [
                { type: "block" },
                {
                  type: "image",
                  options: {
                    metadata: ["blurhash", "lqip", "palette"],
                  },
                },
              ],
            },
            {
              name: "descriptionEs",
              title: "Descripció (ES)",
              type: "array",
              of: [
                { type: "block" },
                {
                  type: "image",
                  options: {
                    metadata: ["blurhash", "lqip", "palette"],
                  },
                },
              ],
            },
            {
              name: "descriptionEn",
              title: "Descripció (EN)",
              type: "array",
              of: [
                { type: "block" },
                {
                  type: "image",
                  options: {
                    metadata: ["blurhash", "lqip", "palette"],
                  },
                },
              ],
            },
          ],
          preview: {
            select: {
              title: "internationalizedTitle",
              description: "descriptionCa",
            },
            prepare({ title, description }) {
              const block = (description || []).find((block) => block._type === "block");

              return {
                title: title.find((t) => t._key === "ca")?.value,
                subtitle: block
                  ? block.children
                      .filter((child) => child._type === "span")
                      .map((span) => span.text)
                      .join("")
                  : "No title",
              };
            },
          },
        },
      ],
    },
  ],
  orderings: [orderRankOrdering],
  preview: {
    select: {
      title: "title",
      media: "image",
    },
    prepare({ title, media }) {
      return {
        title: title,
        media: media?.asset !== undefined ? <MySanityImage image={media} /> : undefined,
      };
    },
  },
};

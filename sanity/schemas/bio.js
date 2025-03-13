import portableText from "./portableText";
import { isUniqueOtherThanLanguage } from "../utils/isUniqueOtherThanLanguage";

export default {
  name: "bio",
  title: "Bio",
  type: "document",
  fields: [
    {
      name: "internationalizedTitle",
      title: "Títol",
      type: "internationalizedArrayString",
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
  ],
  preview: {
    select: {
      title: "internationalizedTitle",
    },
    prepare({ title }) {
      return {
        title: title.find((t) => t._key === "ca")?.value,
      };
    },
  },
};

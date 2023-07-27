import portableText from "./portableText";
import { isUniqueOtherThanLanguage } from "../utils/isUniqueOtherThanLanguage";

export default {
  name: "bio",
  title: "Bio",
  type: "document",
  fields: [
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
    portableText,
    {
      name: "language",
      type: "string",
      readOnly: true,
      hidden: true,
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "language",
    },
    prepare({ title, subtitle }) {
      return {
        title,
        subtitle: subtitle.toUpperCase(),
      };
    },
  },
};

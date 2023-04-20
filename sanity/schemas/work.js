import { orderRankField, orderRankOrdering } from "@sanity/orderable-document-list";
import { BsFolder as icon } from "react-icons/bs";
import { isUniqueOtherThanLanguage } from "../utils/isUniqueOtherThanLanguage";
import portableText from "./portableText";

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
      name: "chartToggled",
      title: "Activar Graella",
      type: "boolean",
    },
    {
      name: "chart",
      title: "Graella",
      type: "array",
      hidden: ({ document }) => !document?.chartToggled,
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
    portableText,
    {
      // should match 'languageField' plugin configuration setting, if customized
      name: "language",
      type: "string",
      readOnly: true,
      hidden: true,
    },
  ],
  orderings: [orderRankOrdering],
};

import { orderRankField, orderRankOrdering } from "@sanity/orderable-document-list";

import { BsFolder as icon } from "react-icons/bs";
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
  ],
  orderings: [orderRankOrdering],
};

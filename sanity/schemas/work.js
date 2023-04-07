import { BsFolder as icon } from "react-icons/bs";
import portableText from "./portableText";

export default {
  name: "work",
  title: "Obres",
  type: "document",
  icon,
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
      type: "object",
      hidden: ({ document }) => !document?.chartToggled,
      fields: [
        {
          name: "place",
          title: "Lloc",
          type: "string",
        },
        {
          name: "cycle",
          title: "Cicle",
          type: "string",
        },
        {
          name: "year",
          title: "Any",
          type: "string",
        },
      ],
    },
    portableText,
  ],
};

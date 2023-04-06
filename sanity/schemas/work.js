import { BsFolder as icon } from "react-icons/bs";

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
    {
      name: "content",
      title: "Contingut",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          options: {
            metadata: ["blurhash", "lqip", "palette"],
          },
        },
        // {
        //   type: "youtube",
        // },
      ],
    },
  ],
};

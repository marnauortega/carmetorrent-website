export default {
  name: "work",
  title: "Obra",
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
      // options: {
      //   collapsible: true,
      // },
    },
    {
      name: "content",
      title: "Contingut",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
        },
        // {
        //   type: "youtube",
        // },
      ],
    },
  ],
};

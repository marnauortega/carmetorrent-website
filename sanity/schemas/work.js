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

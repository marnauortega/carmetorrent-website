import portableText from "./portableText";

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
      },
    },
    portableText,
  ],
};

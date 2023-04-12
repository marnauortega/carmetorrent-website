import portableText from "./portableText";

export default {
  name: "bio",
  title: "Bio",
  type: "document",
  i18n: true,
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
  preview: {
    select: {
      title: "__i18n_lang",
    },
    prepare({ title }) {
      return {
        title: title.slice(0, 2).toUpperCase(),
      };
    },
  },
};

import portableText from "./portableText";

export default {
  name: "contact",
  title: "Contacte",
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
    {
      // should match 'languageField' plugin configuration setting, if customized
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
        subtitle: subtitle.slice(0, 2).toUpperCase(),
      };
    },
  },
};

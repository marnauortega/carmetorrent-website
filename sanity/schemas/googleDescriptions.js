import { ImGoogle } from "react-icons/im";

export default {
  name: "googleDescriptions",
  title: "Descripcions de Google",
  type: "document",
  fields: [
    {
      name: "homeDescription",
      title: "Descripció d'Inici",
      type: "text",
      rows: 2,
      validation: (Rule) => Rule.required().max(140),
    },
    {
      name: "bioDescription",
      title: "Descripció de Bio",
      type: "text",
      rows: 2,
      validation: (Rule) => Rule.required().max(140),
    },
    {
      name: "contactDescription",
      title: "Descripció de Contacte",
      type: "text",
      rows: 2,
      validation: (Rule) => Rule.required().max(140),
    },
    {
      name: "order",
      type: "order",
    },
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
      language: "language",
    },
    prepare({ title, language }) {
      return {
        title:
          language === "en"
            ? "Google Descriptions"
            : language === "ca"
            ? "Descripcions de Google"
            : "Descripciones de Google",
        subtitle: language.slice(0, 2).toUpperCase(),
        media: <ImGoogle />,
      };
    },
  },
};

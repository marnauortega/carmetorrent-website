import locales from "./utils/locales";
import { structureTool } from "sanity/structure";
import { deskStructure } from "./sanity/deskStructure";
import { internationalizedArray } from "sanity-plugin-internationalized-array";
import { colorInput } from "@sanity/color-input";
import { schemaTypes } from "./sanity/schemas";

export const config = {
  projectId: "jpoqf5n3",
  dataset: "production",
  title: "Carme Torrent",
  basePath: "/admin",
  plugins: [
    structureTool({ structure: deskStructure }),
    colorInput(),
    internationalizedArray({
      languages: locales,
      // defaultLanguages: locales.map((locale) => locale.id),
      fieldTypes: ["string", "text"],
    }),
  ],
  schema: {
    types: schemaTypes,
  },
};

import { structureTool } from "sanity/structure";
import { deskStructure } from "./sanity/deskStructure";
import { documentInternationalization } from "@sanity/document-internationalization";
import i18nConfig from "./sanity/i18nConfig";
import { colorInput } from "@sanity/color-input";
import { schemaTypes } from "./sanity/schemas";

export const config = {
  projectId: "jpoqf5n3",
  dataset: "production",
  title: "Carme Torrent",
  basePath: "/admin",
  plugins: [structureTool({ structure: deskStructure }), documentInternationalization(i18nConfig), colorInput()],
  schema: {
    types: schemaTypes,
  },
};

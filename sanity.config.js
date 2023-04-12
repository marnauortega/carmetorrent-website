import { deskTool } from "sanity/desk";
import { deskStructure } from "./sanity/deskStructure";
import { visionTool } from "@sanity/vision";
import { documentI18n } from "@sanity/document-internationalization";
import i18nConfig from "./sanity/i18nConfig";
import { schemaTypes } from "./sanity/schemas";

export const config = {
  projectId: "jpoqf5n3",
  dataset: "production",
  title: "Admin",
  basePath: "/admin",
  plugins: [deskTool({ structure: deskStructure }), visionTool(), documentI18n(i18nConfig)],
  schema: {
    types: schemaTypes,
  },
};

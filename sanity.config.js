import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schemas/index";
import { myStructure } from "./sanity/myStructure";

export const config = {
  projectId: "jpoqf5n3",
  dataset: "production",
  title: "Admin",
  basePath: "/admin",
  plugins: [deskTool({ structure: myStructure }), visionTool()],
  schema: {
    types: schemaTypes,
  },
};

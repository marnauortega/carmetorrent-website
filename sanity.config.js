import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schemas";

export const config = {
  projectId: "jpoqf5n3",
  dataset: "production",
  title: "Carme Torrent Website",
  basePath: "/admin",
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
};

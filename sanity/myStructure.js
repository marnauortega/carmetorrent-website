import { BsFolder as workIcon } from "react-icons/bs";
import { BsPerson as bioIcon } from "react-icons/bs";
import { BsEnvelope as contactIcon } from "react-icons/bs";

export const myStructure = (S) =>
  S.list()
    .title("Contingut")
    .items([
      ...S.documentTypeListItems().filter((listItem) => !["bio", "contact"].includes(listItem.getId())),
      S.listItem().title("Bio").icon(bioIcon).child(S.document().schemaType("bio")),
      S.listItem().title("Contacte").icon(contactIcon).child(S.document().schemaType("contact")),
    ]);

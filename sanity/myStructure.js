import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";
import { BsFolder as workIcon } from "react-icons/bs";
import { BsPerson as bioIcon } from "react-icons/bs";
import { BsEnvelope as contactIcon } from "react-icons/bs";

export const myStructure = (S, context) =>
  S.list()
    .title("Contingut")
    .items([
      // Minimum required configuration
      orderableDocumentListDeskItem({
        type: "work",
        title: "Obres",
        icon: workIcon,
        S,
        context,
      }),
      S.listItem().title("Bio").icon(bioIcon).child(S.document().schemaType("bio")),
      S.listItem().title("Contacte").icon(contactIcon).child(S.document().schemaType("contact")),
    ]);

import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";
import { BsFolder as workIcon } from "react-icons/bs";
import { BsPerson as bioIcon } from "react-icons/bs";
import { BsEnvelope as contactIcon } from "react-icons/bs";

export const deskStructure = (S, context) =>
  S.list()
    .title("Contingut")
    .items([
      // Minimum required configuration
      orderableDocumentListDeskItem({
        type: "work",
        title: "Obres",
        icon: workIcon,
        filter: `__i18n_lang == $lang`,
        params: {
          lang: "ca_ES",
        },
        S,
        context,
      }),
      S.listItem()
        .title("Bio")
        .icon(bioIcon)
        .child(
          S.documentList()
            .title("Bio")
            .schemaType("bio")
            .filter("_type == $type")
            .params({
              type: "bio",
            })
            .menuItems([
              {
                title: "Create new",
                intent: {
                  type: "create",
                  params: {
                    type: "bio",
                    template: "bio",
                  },
                },
              },
            ])
        ),
      S.listItem()
        .title("Contacte")
        .icon(contactIcon)
        .child(
          S.documentList()
            .title("Contacte")
            .schemaType("contact")
            .filter("_type == $type")
            .params({
              type: "contact",
            })
            .menuItems([
              {
                title: "Create new",
                intent: {
                  type: "create",
                  params: {
                    type: "contact",
                    template: "contact",
                  },
                },
              },
            ])
        ),
    ]);

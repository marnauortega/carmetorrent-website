import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";
import { BsFolder as workIcon } from "react-icons/bs";
import { BsPerson as bioIcon } from "react-icons/bs";
import { BsEnvelope as contactIcon } from "react-icons/bs";
import { FiYoutube } from "react-icons/fi";
import { ImGoogle } from "react-icons/im";
import { LuPalette } from "react-icons/lu";

export const deskStructure = (S, context) =>
  S.list()
    .title("Contingut")
    .items([
      // Minimum required configuration
      orderableDocumentListDeskItem({
        type: "work",
        title: "Obres",
        icon: workIcon,
        filter: `language == $lang`,
        params: {
          lang: "ca",
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
            .defaultOrdering([{ field: "order", direction: "asc" }])
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
            .defaultOrdering([{ field: "order", direction: "asc" }])
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
      S.divider(),
      S.listItem()
        .title("Colors")
        .id("colors")
        .icon(LuPalette)
        .child(S.document().schemaType("colors").documentId("colors")),
      S.listItem()
        .title("Descripcions de Google")
        .icon(ImGoogle)
        .child(
          S.documentList()
            .title("Descripcions de Google")
            .schemaType("googleDescriptions")
            .filter("_type == $type")
            .params({
              type: "googleDescriptions",
            })
            .defaultOrdering([{ field: "order", direction: "asc" }])
            .menuItems([
              {
                title: "Create new",
                intent: {
                  type: "create",
                  params: {
                    type: "googleDescriptions",
                    template: "googleDescriptions",
                  },
                },
              },
            ])
        ),
      S.divider(),
      S.listItem()
        .title("Video introductori")
        .icon(FiYoutube)
        .child(
          S.component()
            .id("introduccio")
            .title("Video introductori")
            .component(
              <iframe
                width="560"
                height="315"
                style={{ margin: "20px", position: "absolute" }}
                src="https://www.youtube.com/embed/XLVvaKq_hcg"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
            )
        ),
    ]);

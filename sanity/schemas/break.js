import { BsChevronDoubleDown as breakIcon } from "react-icons/bs";

export default {
  name: "break",
  type: "object",
  title: "Salt",
  icon: breakIcon,
  options: {
    modal: {
      type: "popover",
    },
  },
  fields: [
    {
      name: "style",
      type: "string",
      title: "Break style",
      //   hidden: true,
      initialValue: "salt de línia",
      options: {
        list: [{ title: "Salt de línia", value: "salt de línia" }],
        layout: "radio",
      },
    },
  ],
};

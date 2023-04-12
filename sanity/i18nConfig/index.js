import CatFlag from "./catFlag.svg";
import Image from "next/image";

export default {
  languages: [
    {
      title: "Català",
      id: "ca_ES",
    },
    {
      title: "Anglès",
      id: "en_GB",
    },
    {
      title: "Castellà",
      id: "es_ES",
    },
  ],
  customFlagComponents: {
    ca_ES: () => <Image src={CatFlag} width="24" height="24" alt="" />,
  },
};

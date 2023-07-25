import LanguageToggler from "@/components/LanguageToggler/LanguageToggler";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ params }) {
  return (
    <>
      <LanguageToggler params={params} />
    </>
  );
}

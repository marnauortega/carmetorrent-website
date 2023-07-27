import { getSingletons } from "@/sanity/queries";
import MobileMenuClient from "./MobileMenuClient";

const MobileMenu = async ({ params }) => {
  const singletons = await getSingletons(params.locale);

  return <MobileMenuClient params={params} singletons={singletons} />;
};

export default MobileMenu;

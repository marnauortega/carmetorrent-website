"use client";

import { usePathname } from "next/navigation";
import MobileToggler from "./MobileToggler";
import DesktopToggler from "./DesktopToggler";

const LanguageToggler = ({ params, mobile = false, translations }) => {
  const pathname = usePathname();

  return mobile ? (
    <MobileToggler params={params} pathname={pathname} translations={translations} />
  ) : (
    <DesktopToggler params={params} pathname={pathname} translations={translations} />
  );
};

export default LanguageToggler;

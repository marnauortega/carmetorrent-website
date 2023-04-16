import { NextResponse } from "next/server";
import i18nConfig from "./sanity/i18nConfig";

let locales = i18nConfig.languages.map((lang) => lang.id.slice(0, 2));

// Get the preferred locale, similar to above or using a library
function getLocale(request) {
  return locales[0];
}

export function middleware(request) {
  // Check if there is any supported locale in the pathname
  const pathname = request.nextUrl.pathname;
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);

    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    return NextResponse.redirect(new URL(`/${locale}/${pathname}`, request.url));
  }
}

export const config = {
  matcher: [
    // Skip all internal paths (_next) and also sanity studio (admin)
    "/((?!_next|admin).*)",
  ],
};

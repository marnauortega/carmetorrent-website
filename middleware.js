import { NextResponse } from "next/server";
import i18nConfig from "./sanity/i18nConfig";

let locales = i18nConfig.supportedLanguages.map((lang) => lang.id.split("_")[0]);
const defaultLocale = locales[0];

export function middleware(request) {
  const pathname = request.nextUrl.pathname;
  const locale = pathname.split("/")[1];

  // Check if the default locale is in the pathname
  if (defaultLocale === locale) {
    // we remove locale if pathname contains default locale, by redirecting
    if (pathname.startsWith(`/${locale}/`)) {
      // if pathname has subpath, remove "/locale", eg. from "/ca/something" to "/something"
      return NextResponse.redirect(new URL(pathname.replace(`/${locale}`, ""), request.url));
    } else {
      // if it doesn't, remove "locale", eg. from "/ca to "/"
      return NextResponse.redirect(new URL(pathname.replace(`${locale}`, ""), request.url));
    }
  }

  const pathnameIsMissingValidLocale = locales.every((locale) => {
    // If pathname isn't "/ca" and doesn't contain "/ca/", then it isn't valid
    return pathname !== `/${locale}` && !pathname.startsWith(`/${locale}/`);
  });

  if (pathnameIsMissingValidLocale) {
    // we rewrite pathnames without valid locale: rendered `/`, but showing `/ca`
    return NextResponse.rewrite(
      // Pathname already includes "/"
      new URL(`/${defaultLocale}${pathname}`, request.url)
    );
  }
}

export const config = {
  matcher: [
    // Skip all internal paths (_next) and also sanity studio (admin)
    "/((?!api|admin|_next/static|_next/image|assets|favicon.ico|sw.js).*)",
  ],
};

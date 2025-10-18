import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { revalidateTag } from "next/cache";
import locales from "@/utils/locales";

export async function POST(req) {
  const secret = req.nextUrl.searchParams.get("secret");
  const body = await req.json();
  console.log("revalidate", body);
  if (process.env.SANITY_WEBHOOK_SECRET === secret && body.slug) {
    const localeIds = locales.map((locale) => locale.id);
    if (body._type === "work") {
      localeIds.forEach((locale) =>
      revalidatePath(`/${locale}/work/${body.slug.current}`));
      localeIds.forEach((locale) => revalidatePath(`/${locale}`));
      // As this doesn't seem to work
      revalidateTag("nav");
      // then we'll revalidate everything
      revalidatePath("", "layout");

      // revalidatePath(`/${body.language}/images`);
    }
    if (body._type === "colors") {
      revalidateTag("revalidate");
    }
    if (body._type === "bio" || body._type === "contact")  localeIds.forEach((locale) => revalidatePath(`/${locale}/${body.slug.current}`));
  }
  return NextResponse.json({ revalidated: true, now: Date.now() });
}

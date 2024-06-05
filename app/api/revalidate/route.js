import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { revalidateTag } from "next/cache";

export async function POST(req) {
  const secret = req.nextUrl.searchParams.get("secret");
  // console.log("revalidate", body);
  const body = await req.json();
  if (process.env.SANITY_WEBHOOK_SECRET === secret && body.slug) {
    if (body._type === "work") {
      revalidatePath(`/${body.language}/work/${body.slug.current}`);
      revalidatePath(`/${body.language}`);
      revalidatePath(`/${body.language}/images`);
    }
    if (body._type === "colors") {
      revalidateTag("revalidate");
    }
    if (body._type === "bio" || body._type === "contact") revalidatePath(`/${body.language}/${body.slug.current}`);
  }
  return NextResponse.json({ revalidated: true, now: Date.now() });
}

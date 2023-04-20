export async function isUniqueOtherThanLanguage(slug, context) {
  const { document, getClient } = context;
  if (!document) {
    return false;
  }
  const client = getClient({ apiVersion: "2022-12-07" });
  const id = document._id.replace(/^drafts\./, "");
  const params = {
    draft: `drafts.${id}`,
    published: id,
    language: document.language,
    slug,
  };
  const query = `!defined(*[
      !(_id in [$draft, $published]) &&
      slug.current == $slug &&
      language == $language
    ][0]._id)`;
  const result = await client.fetch(query, params);
  return result;
}

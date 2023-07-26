export default {
  name: "content",
  title: "Contingut",
  type: "array",
  of: [
    { type: "block" },
    {
      type: "image",
      options: {
        metadata: ["blurhash", "lqip", "palette"],
      },
    },
  ],
};

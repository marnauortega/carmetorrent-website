/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://carmetorrent.com",
  generateRobotsTxt: true, // (optional)
  alternateRefs: [
    {
      href: "https://carmetorrent.com/ca",
      hreflang: "ca",
    },
    {
      href: "https://carmetorrent.com/es",
      hreflang: "es",
    },
    {
      href: "https://carmetorrent.com/en",
      hreflang: "en",
    },
  ],
};

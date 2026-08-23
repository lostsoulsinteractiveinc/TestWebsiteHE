import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    // TODO: replace with the real domain once one is registered
    url: "https://hotel-espir.example.com/",
    title: "Hotel Espir",
    description:
      "A stealth horror game about escaping the reanimated killer haunting a grand Alabama hotel built on plantation soil.",
    author: "Lost Souls Interactive",
    ogImage: "default-og.jpg",
    lang: "en",
    timezone: "UTC",
    dir: "ltr",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: false,
    },
    search: "pagefind",
  },
  socials: [
    { name: "x",         url: "#!" },
    { name: "instagram", url: "#!" },
    { name: "tiktok",    url: "#!" },
    { name: "youtube",   url: "#!" },
    { name: "mail",      url: "mailto:contact@lostsoulsinteractive.com" },
  ],
  shareLinks: [
    { name: "whatsapp", url: "https://wa.me/?text=" },
    { name: "facebook", url: "https://www.facebook.com/sharer.php?u=" },
    { name: "x",        url: "https://x.com/intent/post?url=" },
    { name: "telegram", url: "https://t.me/share/url?url=" },
    { name: "pinterest", url: "https://pinterest.com/pin/create/button/?url=" },
    { name: "mail",     url: "mailto:?subject=See%20this%20post&body=" },
  ],
});
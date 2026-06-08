import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Sailfish Studio",
  description: "Next-gen block-based programming platform",
  lang: "zh-CN",
  themeConfig: {
    nav: [
      { text: "指南", link: "/guide/" },
      { text: "API", link: "/api/" },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/Sailfish-Studio" },
    ],
  },
});

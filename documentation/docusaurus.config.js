/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "React Native Boilerplate",
  tagline:
    "Ready to use react native architecture tailored for Xtendly & Prosperna mobile development",
  url: "https://jericok.github.io",
  baseUrl: "/xtendly-prosperna-react-native-boilerplate/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",
  organizationName: "xtendlyxprosperna",
  projectName: "react-native-boilerplate",
  themeConfig: {
    // algolia: {
    //   apiKey: "870ae81ec981530781f32849c55a593f",
    //   indexName: "rnboilerplate",
    //   contextualSearch: true,
    // },
    navbar: {
      title: "KDEV",
      logo: {
        alt: "React Native Boilerplate",
        src: "img/TOM-small.png",
      },
      items: [
        {
          to: "docs/Introduction",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        {
          to: "/blog",
          label: "Blog",
          position: "left",
        },
        {
          href: "https://github.com/JericoK/xtendly-prosperna-react-native-boilerplate",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "light",
      logo: {
        alt: "Facebook Open Source Logo",
        src: "img/MAIN.png",
      },
      copyright: `Copyright © ${new Date().getFullYear()} Xtendly x Prosperna. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/thecodingmachine/react-native-boilerplate/edit/master/website-documentation/docs",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/thecodingmachine/react-native-boilerplate/edit/master/website-documentation/blog",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};

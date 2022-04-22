export default {
  "title": "React Native Boilerplate",
  "tagline": "Ready to use react native architecture tailored for Xtendly & Prosperna mobile development",
  "url": "https://jericok.github.io",
  "baseUrl": "/xtendly-prosperna-react-native-boilerplate/",
  "onBrokenLinks": "warn",
  "onBrokenMarkdownLinks": "warn",
  "favicon": "img/favicon.png",
  "organizationName": "xtendlyxprosperna",
  "projectName": "react-native-boilerplate",
  "themeConfig": {
    "navbar": {
      "title": "KDEV",
      "logo": {
        "alt": "React Native Boilerplate",
        "src": "img/TOM-small.png"
      },
      "items": [
        {
          "to": "docs/Introduction",
          "activeBasePath": "docs",
          "label": "Docs",
          "position": "left"
        },
        {
          "to": "/blog",
          "label": "Blog",
          "position": "left"
        },
        {
          "href": "https://github.com/JericoK/xtendly-prosperna-react-native-boilerplate",
          "label": "GitHub",
          "position": "right"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "light",
      "logo": {
        "alt": "Facebook Open Source Logo",
        "src": "img/MAIN.png"
      },
      "copyright": "Copyright © 2022 Xtendly x Prosperna. Built with Docusaurus.",
      "links": []
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadata": [],
    "prism": {
      "additionalLanguages": []
    },
    "hideableSidebar": false,
    "tableOfContents": {
      "minHeadingLevel": 2,
      "maxHeadingLevel": 3
    }
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "/Users/jericoxnavarro/Documents/GitHub/xtendly-prosperna-react-native-boilerplate/documentation/sidebars.js",
          "editUrl": "https://github.com/thecodingmachine/react-native-boilerplate/edit/master/website-documentation/docs"
        },
        "blog": {
          "showReadingTime": true,
          "editUrl": "https://github.com/thecodingmachine/react-native-boilerplate/edit/master/website-documentation/blog"
        },
        "theme": {
          "customCss": "/Users/jericoxnavarro/Documents/GitHub/xtendly-prosperna-react-native-boilerplate/documentation/src/css/custom.css"
        }
      }
    ]
  ],
  "baseUrlIssueBanner": true,
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "localeConfigs": {}
  },
  "onDuplicateRoutes": "warn",
  "staticDirectories": [
    "static"
  ],
  "customFields": {},
  "plugins": [],
  "themes": [],
  "titleDelimiter": "|",
  "noIndex": false
};
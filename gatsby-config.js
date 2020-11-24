module.exports = {
  siteMetadata: {
    title: `Russian House`,
    titleTemplate: " Melbourne",
    description: `Russian House community center website`,
    url: `https://www.russianhouse.com.au`,
    author: "@sadanov",
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `cms`,
        path: `${__dirname}/static/dates`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images\/svg/
        }
      }
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: `${__dirname}/src/components/layout.js`
      }
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        path: `${__dirname}/src/locales`,
        languages: [`en`, `ru`],
        defaultLanguage: `en`,
  
        i18nextOptions: {
          // lng: "en",
          // fallbackLng: "en",
          // ns: ["common", "cards", "support"],
          interpolation: {
            escapeValue: false
          }
        }
      }
    }
  ]
}

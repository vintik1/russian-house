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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    // {
    //   resolve: `gatsby-plugin-s3`,
    //   options: {
    //     bucketName: `russian-house-bucket`,
    //     protocol: `https`
    //   },
    // },
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

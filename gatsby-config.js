module.exports = {
  siteMetadata: {
    title: `Russian House`,
    siteUrl: `https://www.russianhouse.com.au`,
    description: `Russian House community center website`,
    author: `@sadanov`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `pages`,
    //     path: `${__dirname}/src/pages`,
    //   },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layout.js`)
      }
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        path: `${__dirname}/src/locales`,
        languages: [`en`, `ru`],
        defaultLanguage: `en`,
  
        i18nextOptions: {
          lng: "en",
          ns: ["common", "cards", "support"],
          interpolation: {
            escapeValue: false
          }
        }
      }
    }
  ]
}

/**
 * seo.js
 * Created by Egor Sadanov (@sadanov)
 *
 * This function returns the seo of the website's index page.
 *
 * 1. It provides metatags for search engines.
 */
import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"
import { useI18next } from "gatsby-plugin-react-i18next"

function SEO ({ description, meta, title }) {
  const { pathname } = useLocation()
  const { site } = useStaticQuery(query)

  const seo = {
    title: title || site.siteMetadata.defaultTitle,
    description: description || site.siteMetadata.defaultDescription,
    url: `${site.siteMetadata.siteUrl}${pathname}`
  }

  const { language } = useI18next();
  return (
    <Helmet
      // htmlAttributes={{
      //   lang: language === "en"? "en-au":"ru-au",
      // }}
      title={seo.title}
      titleTemplate={`%s | ${site.siteMetadata.titleTemplate}`}
      meta={[
        {
          name: `description`,
          content: seo.description,
        },
        {
          property: `og:title`,
          content: seo.title,
        },
        {
          property: `og:description`,
          content: seo.description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: seo.title,
        },
        {
          name: `twitter:description`,
          content: seo.description,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
}

export default SEO

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl: url
        author
      }
    }
  }
`
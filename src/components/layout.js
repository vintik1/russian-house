import React, { useState } from 'react'
import Alert from 'react-bootstrap/Alert'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import Collapse from 'react-bootstrap/Collapse'
import Header from './header'
import Footer from './footer'

import '../css/main.css';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const [show, setShow] = useState(true)

  return (
    <>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: 'description', content: 'Russian House Community Hub' },
          { name: 'keywords', content: 'Community, Russian' },
          { name: 'author', content: '@sadanov' },
        ]}
      />
      <Collapse in={show} appear unmountOnExit>
        <Alert variant="dark" className="mb-0" onClose={() => setShow(false)} dismissible>
          <Alert.Heading>Rental Service is temporary unavailable</Alert.Heading>
          <p className="mb-0">
            Due to Covid lockdown the Russian House is Closed for Visitors
          </p>
        </Alert>
      </Collapse>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

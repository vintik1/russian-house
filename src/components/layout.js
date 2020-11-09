/**
 * layout.js
 * Created by Egor Sadanov (@sadanov)
 *
 * This JavaScript file handles the layout of the website.
 *
 * 1. It wraps every site's page with SEO, header and footer.
 */
import React, { useState, useEffect } from 'react'
import { useTranslation } from "gatsby-plugin-react-i18next"
import PropTypes from 'prop-types'

import Collapse from 'react-bootstrap/Collapse'
import Alert from 'react-bootstrap/Alert'
import Header from './header'
import Footer from './footer'
import SEO from './seo'

import '../../scss/main.css'

const Layout = ({children}) => {
  const [t] = useTranslation("common")
  const [show, setShow] = useState(false)

  useEffect(() =>{
    setTimeout(() => { 
      setShow(true) 
    }, 300)
  }, [])

  return (
    <>
      <SEO />
      <Collapse in={show} unmountOnExit>
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

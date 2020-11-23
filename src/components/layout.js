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

import Header from './header'
import Footer from './footer'
import SEO from './seo'

import '../styles/main.css'

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

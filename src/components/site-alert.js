/**
 * site-alert.js
 * Created by Egor Sadanov (@sadanov)
 *
 * This JavaScript file provides component for adding alert above navigation bar.
 */
import React, { useState, useEffect } from 'react'
import { useTranslation } from "gatsby-plugin-react-i18next"

import Collapse from 'react-bootstrap/Collapse'
import Alert from 'react-bootstrap/Alert'

const SiteAlert = () => {
  const [t] = useTranslation("common")
  const [show, setShow] = useState(false)

  useEffect(() =>{
    setTimeout(() => { 
      setShow(true) 
    }, 300)
  }, [])

  return (
    <>
      <Collapse in={show} unmountOnExit>
        <Alert variant="dark" className="mb-0" onClose={() => setShow(false)} dismissible>
          <Alert.Heading>Rental Service is temporary unavailable</Alert.Heading>
          <p className="mb-0">
            Due to Covid lockdown the Russian House is Closed for Visitors
          </p>
        </Alert>
      </Collapse>
    </>
  )
}

export default SiteAlert

import React from 'react'
import { Link, useI18next } from "gatsby-plugin-react-i18next"

import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import MenuIcon from "../svg/menu.svg"


function Header () {
  const {t, language, changeLanguage} = useI18next("common");

  return (
    <header className="sticky-top bg-white">
      <Container>
        <Navbar collapseOnSelect expand="lg" bg="white" className="py-3 px-0">
          <Navbar.Brand>
            <Link to="/" className="custom-brand">{t('brand')}</Link>
          </Navbar.Brand>
          <Navbar.Toggle as={MenuIcon} aria-controls="menu-nav" className="cursor-pointer border-0 order-2 pr-0" />
          <Navbar.Collapse id="menu-nav" className="order-3 order-lg-1">
            <Nav>
              <Nav.Link as={Link} to="/events" href="/events">{t('menu.events')}</Nav.Link>
              <Nav.Link as={Link} to="/about" href="/about">{t('menu.about')}</Nav.Link>
              <Nav.Link as={Link} to="/library" href="/library">{t('menu.library')}</Nav.Link>
              <Nav.Link as={Link} to="/hire" href="/hire">{t('menu.hire')}</Nav.Link>
              <Nav.Link as={Link} to="/support" href="/support">{t('menu.support-us')}</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Text role="button" className="order-1 order-lg-2 lang-toggle ml-auto"
            onClick={() => language === 'en'? changeLanguage('ru'):changeLanguage('en')}
            >{language}
          </Navbar.Text>
        </Navbar>
      </Container>
      <Container><hr className="m-0" /></Container>
    </header>
  )
}

export default Header
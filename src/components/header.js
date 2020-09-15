import React from 'react'
import { Link } from 'gatsby'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { useTranslation } from "react-i18next"


function Header () {
  const [t, i18n] = useTranslation('common')

  return (
    <Navbar collapseOnSelect as="header" expand="lg" sticky="top" bg="white" className="py-3">
      <Container>
        <Navbar.Brand>
          <Link to="/" className="custom-brand">Russian House</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="menu-nav" className="border-0 order-2" />
        <Navbar.Collapse id="menu-nav" className="order-3 order-lg-1">
          <Nav>
            <Nav.Link as={Link} to="/events" href="/events">{t('menu.events')}</Nav.Link>
            <Nav.Link as={Link} to="/about" href="/about">{t('menu.about')}</Nav.Link>
            <Nav.Link as={Link} to="/library" href="/library">{t('menu.library')}</Nav.Link>
            <Nav.Link as={Link} to="/hire" href="/hire">{t('menu.hire')}</Nav.Link>
            <Nav.Link as={Link} to="/support" href="/support">{t('menu.support-us')}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        {/* <Navbar.Text role="button" className="order-1 order-lg-2 lang-toggle"
          // onClick={() => i18n.language === 'en'? i18n.changeLanguage('ru'):i18n.changeLanguage('en')}>{i18n.language}
          onClick={() => i18n.changeLanguage('ru')}>{i18n.language}
        </Navbar.Text> */}
        <button onClick={() => i18n.changeLanguage('ru')}>{i18n.language}</button>
      </Container>
    </Navbar>
  )
}

export default Header

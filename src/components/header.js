import React from 'react'
import { Link } from 'gatsby'
import { useTranslation } from "react-i18next"

function Header () {
  const [t, i18n] = useTranslation('common');

  return (
    <nav className="nav nav-underline">
      <Link to="/" className="nav-item nav-link pl-0 pl-lg-auto">{t('menu.events')}</Link>
      <Link to="/" className="nav-item nav-link">{t('menu.about')}</Link>
      <Link to="/" className="nav-item nav-link">{t('menu.library')}</Link>
      <Link to="/" className="nav-item nav-link">{t('menu.hire')}</Link>
      <Link to="/" className="nav-item nav-link">{t('menu.support-us')}</Link>
    </nav>
  )
}
  
export default Header

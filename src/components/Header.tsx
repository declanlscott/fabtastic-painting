import React from "react"

import ContactBar from "./ContactBar"
import Navbar from './Navbar'

interface HeaderProps {
  siteTitle: string
}

const Header: React.FC<HeaderProps> = ({ siteTitle }) => {
  return (
    <header>
      <ContactBar />
      <Navbar siteTitle={siteTitle} />
    </header>
  )
}

export default Header

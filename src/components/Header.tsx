import React from "react"

import ContactBar from "./ContactBar"
import Navbar from './Navbar'

interface HeaderProps {
  siteTitle: string
}

const Header: React.FC<HeaderProps> = ({ siteTitle }) => {
  return (
    <>
      <ContactBar />
      <Navbar siteTitle={siteTitle} />
    </>
  )
}

export default Header

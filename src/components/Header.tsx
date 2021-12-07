import React from "react"
import Navbar from './Navbar'

interface HeaderProps {
  siteTitle: string
}

const Header: React.FC<HeaderProps> = ({ siteTitle }) => {
  return (
    <header>
      <Navbar siteTitle={siteTitle}/>
    </header>
  )
}

export default Header

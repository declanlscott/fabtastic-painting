import React, { ReactNode } from "react"
import { useStaticQuery, graphql } from "gatsby"

import '../styles/global.css';

import Header from "./Header"

interface LayoutProps {
  children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const data: any = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const siteTitle: string = data.site.siteMetadata?.title || `Title`

  return (
    <>
      <Header siteTitle={siteTitle} />
    </>
  )
}

export default Layout

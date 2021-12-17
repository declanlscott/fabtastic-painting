import React from "react"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

const NotFoundPage: React.FC = () => {
  return (
    <Layout>
      <Seo pageTitle="404" />
      404
      {/* content */}
    </Layout>
  )
}

export default NotFoundPage

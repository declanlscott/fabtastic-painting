import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

interface SEOProps {
    pageTitle: string,
    meta?: Array<{name: string, content: string}>,
}

function Seo({ pageTitle, meta=[] }: SEOProps) {
    const data = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        siteTitle
                        siteDescription
                        author
                    }
                }
            }
        `
    )

    const metaTitle: string = data.site.siteMetadata?.siteTitle
    const metaDescription: string = data.site.siteMetadata?.siteDescription

    return (
        <Helmet
            title={pageTitle}
            titleTemplate={metaTitle ? `%s | ${metaTitle}` : undefined}
            meta={[
                {
                  name: `description`,
                  content: metaDescription,
                },
                {
                  property: `og:title`,
                  content: pageTitle,
                },
                {
                  property: `og:description`,
                  content: metaDescription,
                },
                {
                  property: `og:type`,
                  content: `website`,
                },
                {
                  name: `twitter:card`,
                  content: `summary`,
                },
                {
                  name: `twitter:creator`,
                  content: data.site.siteMetadata?.author || ``,
                },
                {
                  name: `twitter:title`,
                  content: pageTitle,
                },
                {
                  name: `twitter:description`,
                  content: metaDescription,
                },
                {
                  name: `viewport`,
                  content: `width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no`,
                },
              ].concat(meta)}
        />
    )
}

export default Seo

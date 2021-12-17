import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

interface SEOProps {
    pageTitle: string,
    meta?: Array<{name: string, content: string}>,
}

function Seo({ pageTitle, meta=[] }: SEOProps) {
    const { site }: any = useStaticQuery(
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

    const metaTitle: string = site.siteMetadata?.siteTitle
    const metaDescription: string = site.siteMetadata?.siteDescription

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
                  content: site.siteMetadata?.author || ``,
                },
                {
                  name: `twitter:title`,
                  content: pageTitle,
                },
                {
                  name: `twitter:description`,
                  content: metaDescription,
                },
              ].concat(meta)}
        />
    )
}

export default Seo

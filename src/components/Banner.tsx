import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { getImage } from 'gatsby-plugin-image'
import BackgroundImage from 'gatsby-background-image'
import { convertToBgImage } from 'gbimage-bridge'

import FadeIn from './FadeIn'

interface BannerProps {
    pageTitle: string
}

const Banner: React.FC<BannerProps> = ({ pageTitle }) => {
    const data = useStaticQuery(
        graphql`
            query {
                file(relativePath: {eq: "banner.jpg"}) {
                    childImageSharp {
                        gatsbyImageData(
                            formats: [AUTO, WEBP, AVIF],
                            placeholder: DOMINANT_COLOR,
                            transformOptions: {cropFocus: CENTER, fit: COVER}
                        )
                    }
                }
            }
        `
    )

    const bannerImage = getImage(data.file.childImageSharp?.gatsbyImageData);

    const bannerBgImage = convertToBgImage(bannerImage);

    return (
        <div className="inline-block w-full bg-black bg-opacity-30">
            <BackgroundImage
                {...bannerBgImage}
                preserveStackingContext
                className="lg:h-96 h-80"
            >
                <FadeIn>
                    <div className="lg:h-96 h-80 flex justify-center items-center">
                        <h1 className="lg:text-6xl md:text-5xl text-4xl font-bold text-white uppercase tracking-wide">{pageTitle}</h1>
                    </div>
                </FadeIn>
                
            </BackgroundImage>
        </div>
    )
}

export default Banner

import React from 'react'

import { Link, graphql, useStaticQuery } from 'gatsby'

import { getImage } from 'gatsby-plugin-image'
import BackgroundImage from 'gatsby-background-image'
import { convertToBgImage } from 'gbimage-bridge'

import { FaPaintRoller } from 'react-icons/fa'

import FadeIn from './FadeIn'

const HeroPage: React.FC = () => {
    const data = useStaticQuery(
        graphql`
            query {
                file(relativePath: {eq: "hero.webp"}) {
                    childImageSharp {
                        gatsbyImageData(
                            formats: [AUTO, WEBP, AVIF],
                            placeholder: NONE,
                            transformOptions: {cropFocus: CENTER, fit: COVER}
                        )
                    }
                }
            }
        `
    )

    const heroImage = getImage(data.file.childImageSharp?.gatsbyImageData);

    const heroBgImage = convertToBgImage(heroImage);

    return (
        <div className="inline-block w-full bg-black bg-opacity-50">
            <BackgroundImage
                {...heroBgImage}
                preserveStackingContext
                className="min-h-screen"
            >
                <div className="flex-col md:px-8 px-4 md:py-20 py-10">
                    <FadeIn>
                        <h1 className="flex justify-center text-center lg:text-6xl md:text-5xl text-4xl font-bold text-white tracking-wide">RESIDENTIAL &amp; COMMERCIAL</h1>
                    </FadeIn>
                    <FadeIn>
                        <div>
                            <div className="w-48 mx-auto flex">
                                <div className="w-full relative border-b border-primary" />
                                <FaPaintRoller className="w-8 h-8 relative top-4 text-primary mx-2" />
                                <div className="w-full relative border-b border-primary" />
                            </div>
                            <div className="w-48 h-8 mx-auto" />
                        </div>
                    </FadeIn>
                    <FadeIn>
                        <p className="text-center lg:max-w-4xl md:text-lg text-base text-white mx-auto">
                            Fabtastic Painting provides high-quality interior and exterior painting services and more for commercial and residential customers alike. 
                            We go above and beyond to make your next project look Fabtastic. No matter the size of the job, big or small, we will paint it all.
                        </p>
                    </FadeIn>
                    <FadeIn>
                        <div className="flex">
                            <div className="mx-auto mt-10 md:mt-20 mb-4">
                                <Link to="/contact-us" className="px-4 py-2 text-lg font-bold text-secondary bg-primary border border-tertiary rounded-full hover:bg-primary-light transition duration-200">REQUEST A QUOTE</Link>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </BackgroundImage>
        </div>
    )
}

export default HeroPage

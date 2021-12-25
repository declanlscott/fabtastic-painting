import React from 'react'

import { graphql, PageProps } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import Layout from '../components/Layout'
import Seo from '../components/Seo'
import Banner from '../components/Banner'
import FadeIn from '../components/FadeIn'

import { GalleryQuery } from '../../graphql-types'

const GalleryPage: React.FC<PageProps<GalleryQuery>> = ({ data }) => {
    return (
        <Layout>

            <Seo pageTitle="Gallery" />

            <Banner pageTitle='Gallery' />

            <FadeIn>
                <div className="lg:flex justify-center mt-8 md:mt-24 mx-8 lg:mr-32">
                    <div className="flex justify-center items-center">
                        <div className="flex-col text-secondary lg:mr-16">
                            <h3 className="flex sm:justify-center lg:justify-end lg:text-right font-medium tracking-widest mb-2">BROWSE OUR LATEST</h3>
                            <h2 className="flex justify-center lg:justify-end lg:text-right items-center font-semibold text-4xl sm:text-5xl mb-7">WORK &amp; PROJECTS</h2>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <p className="font-light text-base max-w-sm lg:max-w-md">
                            Providing Fabtastic service to the Cedar Rapids &amp; Iowa City Corridor in Eastern Iowa since 2018. 
                            Follow us on <a className="text-tertiary hover:text-tertiary-dark transition duration-200 underline" href="https://www.facebook.com/FabtasticPainting/" target="_blank">Facebook</a> &amp;&nbsp;
                            <a className="text-tertiary hover:text-tertiary-dark transition duration-200 underline" href="https://www.instagram.com/fabtastic_paintingcr/" target="_blank">Instagram</a> to see more!
                        </p>
                    </div>
                </div>
            </FadeIn>

            <div className="max-w-2xl lg:max-w-5xl mx-auto px-8 my-8 md:my-16">
                <div className="masonry sm:masonry-sm lg:masonry-lg">
                    {data.galleryPhotos.edges.map(image => (
                        <FadeIn key={image.node.id}>
                            <div className="break-inside pb-8 max-w-xs mx-auto">
                                <GatsbyImage
                                    image={image.node.childImageSharp?.gatsbyImageData}
                                    alt="Gallery Photos"
                                />
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>

        </Layout>
    )
}

export default GalleryPage

export const pageQuery = graphql`
    query Gallery {
        galleryPhotos: allFile(
            filter: {relativeDirectory: {eq: "gallery"}}
            sort: {order: ASC, fields: relativePath}
        ) {
            edges {
                node {
                    id
                    childImageSharp {
                        gatsbyImageData(
                            formats: [AUTO, WEBP, AVIF]
                            placeholder: DOMINANT_COLOR
                            width: 320
                        )
                    }
                }
            }
        }
    }
`

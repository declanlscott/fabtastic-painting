import React from 'react'

import { Link, useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import "swiper/css/navigation"
import "swiper/css/pagination"
import SwiperCore, {
  Autoplay, Navigation, Pagination, Mousewheel, Keyboard
} from 'swiper'

const Gallery = () => {
    const data = useStaticQuery(
        graphql`
            query {
                allFile (
                    filter: {relativeDirectory: {eq: "gallery/featured"}, extension: {regex: "/(jpg)|(jpeg)|(png)/"}}
                ) {
                    edges {
                        node {
                            id
                            childImageSharp {
                                gatsbyImageData(
                                    formats: [AUTO, WEBP, AVIF]
                                    placeholder: NONE
                                    transformOptions: {fit: COVER, cropFocus: CENTER}
                                    width: 448
                                    height: 448
                                )
                            }
                        }
                    }
                }
            }
            
        `
    )

    SwiperCore.use([Autoplay, Navigation, Pagination, Mousewheel, Keyboard]);

    return (
        <div className="md:flex justify-center my-8 md:my-16 mx-8">
            <div className="flex items-center justify-center">
                <div className="flex-col text-secondary md:mr-16">
                    <h2 className="flex justify-center items-center font-semibold text-4xl sm:text-5xl mb-7">WORK &amp; PROJECTS</h2>
                    <p className="font-light text-base max-w-lg mb-10">
                        Providing Fabtastic service to the Cedar Rapids &amp; Iowa City Corridor in Eastern Iowa since 2018. 
                        Follow us on <a className="text-tertiary hover:text-tertiary-dark transition duration-200 underline" href="https://www.facebook.com/FabtasticPainting/" target="_blank">Facebook</a> &amp;&nbsp;
                        <a className="text-tertiary hover:text-tertiary-dark transition duration-200 underline" href="https://www.instagram.com/fabtastic_paintingcr/" target="_blank">Instagram</a> to see more!
                    </p>
                    <div className="flex mt-4">
                        <div className="mx-auto">
                            <Link to="/gallery" className="mx-auto px-4 py-2 text-lg font-bold bg-primary border border-tertiary rounded-full hover:bg-primary-light transition duration-200">
                                SEE MORE
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center mt-10 md:mt-0">
                <Swiper
                    id="swiper-color"
                    cssMode={true}
                    autoplay={{
                        "delay": 5000,
                    }}
                    navigation={true}
                    pagination={{"clickable": true}}
                    loop={true}
                    mousewheel={true}
                    keyboard={true}
                    className="max-w-md rounded-3xl"
                >
                    
                    {data.allFile.edges.map((image: { node: { id: React.Key | null | undefined; childImageSharp: { gatsbyImageData: any; }; }; }) => (
                        <SwiperSlide key={image.node.id}>
                            <GatsbyImage
                                image={image.node.childImageSharp?.gatsbyImageData}
                                alt="Gallery Photos"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default Gallery

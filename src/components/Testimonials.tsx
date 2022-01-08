import React from 'react'

import { useStaticQuery, graphql } from 'gatsby';

import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa"

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import "swiper/css/navigation"
import "swiper/css/pagination"
import SwiperCore, {
  Autoplay, Navigation, Pagination, Mousewheel, Keyboard
} from 'swiper'

const Testimonials = () => {
    const data = useStaticQuery(
        graphql`
            query {
                allMarkdownRemark (
                    sort: {fields: frontmatter___date, order: ASC}
                ) {
                    edges {
                        node {
                            frontmatter {
                                title
                                author
                                content
                                date
                            }
                            id
                        }
                    }
                }
            }
        `
    )

    SwiperCore.use([Autoplay, Navigation, Pagination, Mousewheel, Keyboard]);

    return (
        <div className="my-8 md:my-16 mx-8">
            <div className="mx-auto max-w-7xl text-secondary">
                <div className="flex justify-between">
                    <div className="flex-col">
                        <h3 className="flex font-medium tracking-widest mb-2">WHAT PEOPLE ARE SAYING</h3>
                        <h2 className="flex font-semibold text-4xl sm:text-5xl mb-7">TESTIMONIALS</h2>
                        <p className="flex font-light text-base max-w-lg mb-10">
                            Don't believe us? Check out our customer write-ups and learn how we went above and beyond to make their spaces Fabtastic.
                        </p>
                    </div>
                    <div className="hidden md:flex text-primary text-opacity-50 gap-16">
                        <FaQuoteLeft className="w-24 h-24 mt-0 my-auto"/>
                        <FaQuoteRight className="w-24 h-24 mb-5 my-auto" />
                    </div>
                </div>
                <Swiper
                    id="swiper-color"
                    cssMode={true}
                    autoplay={{
                        "delay": 15000,
                    }}
                    pagination={{"clickable": true}}
                    loop={true}
                    mousewheel={true}
                    keyboard={true}
                >
                    {data.allMarkdownRemark.edges.map((testimonial: { node: { 
                        id: React.Key | null | undefined;
                        frontmatter: {
                            content:
                                boolean | 
                                React.ReactChild | 
                                React.ReactFragment | 
                                React.ReactPortal | 
                                null | 
                                undefined;
                            author:
                                boolean | 
                                React.ReactChild | 
                                React.ReactFragment | 
                                React.ReactPortal | 
                                null | 
                                undefined;
                        }; }; }) => (
                        <SwiperSlide key={testimonial.node.id} className="my-auto">
                            <div className="max-w-4xl mx-auto text-center">
                                <p className="font-base font-light italic mb-6">"{testimonial.node.frontmatter?.content}"</p>
                                <p className="font-base font-medium">{testimonial.node.frontmatter?.author}</p>
                            </div>
                            <div className="h-10" />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default Testimonials

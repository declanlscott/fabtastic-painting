import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../components/Layout'
import Seo from '../components/Seo'
import Banner from '../components/Banner'
import FadeIn from '../components/FadeIn'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'

const AboutUsPage: React.FC = () => {
    return (
        <Layout>
            
            <Seo pageTitle="About Us" />

            <Banner pageTitle="About Us" />

            <FadeIn>
                <div className="md:flex justify-center my-8 md:mt-24 md:mb-16 mx-8">
                    <div className="flex justify-center items-center">
                        <div className="flex-col text-secondary md:mr-16">
                            <h3 className="flex font-medium tracking-widest mb-2">ESTABLISHED 2018</h3>
                            <h2 className="flex font-semibold text-4xl sm:text-5xl mb-7">WHO WE ARE</h2>
                            <p className="flex text-base leading-relaxed max-w-lg pb-5">
                                Fabtastic Painting was founded in 2018 with the goal of being a high-quality and affordable painting company serving the Corridor & Eastern Iowa. 
                                With over 35 years combined experience in the construction industry, we decided to focus and specialize in the one area we both enjoy and take pride in...painting!
                            </p>
                            <p className="flex text-base leading-relaxed max-w-lg">
                                After running a successful small handyman/remodeling business we decided we wanted a change, so we both went back to college, 
                                Andrea graduating with a degree in Graphic Arts and Korrey with an Architectural Design degree. After spending a few years in the corporate world, 
                                it was decided that we were happier doing our own thing, so we went back to what we truly loved--painting. And we haven't turned back.
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center mt-10 md:mt-0">
                        <StaticImage
                            src="../images/about-us-grid.jpg"
                            alt="About Us"
                            formats={["auto", "webp", "avif"]}
                        />
                    </div>
                </div>
            </FadeIn>

            <FadeIn>
                <Services />
             </FadeIn>

             <FadeIn>
                <Testimonials />
             </FadeIn>

        </Layout>
    )
}

export default AboutUsPage

import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

import { getImage } from 'gatsby-plugin-image'
import BackgroundImage from 'gatsby-background-image'
import { convertToBgImage } from 'gbimage-bridge'

import Layout from '../components/Layout'
import Seo from '../components/Seo'
import Banner from '../components/Banner'
import Testimonials from '../components/Testimonials'
import FadeIn from '../components/FadeIn'

import { FaBrush, FaPaintRoller, FaPaintBrush, FaEllipsisV } from "react-icons/fa"
import { HiOutlineHome, HiHome } from "react-icons/hi"

const ServicesPage: React.FC = () => {
    const data = useStaticQuery(
        graphql`
            query {
                file(relativePath: {eq: "gallery/31.jpg"}) {
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

    const contactUsImage = getImage(data.file.childImageSharp?.gatsbyImageData);

    const contactUsBgImage = convertToBgImage(contactUsImage);

    return (
        <Layout>

            <Seo pageTitle="Services" />

            <Banner pageTitle="Services" />

            <FadeIn>
                <div className="lg:flex justify-center mt-8 md:mt-24 mx-8 lg:mr-32">
                    <div className="flex justify-center items-center">
                        <div className="flex-col text-secondary lg:mr-16">
                            <h3 className="flex sm:justify-center lg:justify-end lg:text-right font-medium tracking-widest mb-2">HIGH-QUALITY &amp; AFFORDABLE</h3>
                            <h2 className="flex justify-center lg:justify-end lg:text-right items-center font-semibold text-4xl sm:text-5xl mb-7">SERVICES WE PROVIDE</h2>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <p className="font-light text-base max-w-sm lg:max-w-md">
                            Specializing in interior &amp; exterior painting, but we will provide very competitive rates and a satisfaction guarantee no matter what your next project needs.
                        </p>
                    </div>
                </div>
            </FadeIn>

            <div className="container mx-auto md:px-8 px-4">
                <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-8 gap-y-20 mt-16 mb-24">
                    <FadeIn>
                        <div className="flex-col max-w-sm mx-auto">
                            <div className="flex justify-center">
                                <div className="border border-tertiary-dark bg-primary h-16 w-16 rounded-full flex justify-center items-center transform transition duration-500 hover:scale-110 my-6">
                                    <FaBrush className='h-8 w-8 text-secondary' />
                                </div>
                            </div>
                            <h3 className="flex justify-center text-center text-secondary text-2xl font-semibold mb-4">Residential Painting</h3>
                            <p className="flex justify-center text-center font-light text-tertiary-dark leading-relaxed">
                                Whether it's your living room, bedroom, kitchen, or bath, an accent wall or the whole house&mdash;we can handle any residential painting needs.
                            </p>
                        </div>
                    </FadeIn>
                    <FadeIn>
                        <div className="flex-col max-w-sm mx-auto">
                            <div className="flex justify-center">
                                <div className="border border-tertiary-dark bg-primary h-16 w-16 rounded-full flex justify-center items-center transform transition duration-500 hover:scale-110 my-6">
                                    <FaPaintRoller className='h-8 w-8 text-secondary' />
                                </div>
                            </div>
                            <h3 className="flex justify-center text-center text-secondary text-2xl font-semibold mb-4">Commercial Painting</h3>
                            <p className="flex justify-center text-center font-light text-tertiary-dark leading-relaxed">
                                We love commercial jobs&mdash;let us refresh the existing look of your business inside or out&mdash;or better yet, give it an all new appearance!
                            </p>
                        </div>
                    </FadeIn>
                    <FadeIn>
                        <div className="flex-col max-w-sm mx-auto">
                            <div className="flex justify-center">
                                <div className="border border-tertiary-dark bg-primary h-16 w-16 rounded-full flex justify-center items-center transform transition duration-500 hover:scale-110 my-6">
                                    <HiOutlineHome className='h-8 w-8 text-secondary' />
                                </div>
                            </div>
                            <h3 className="flex justify-center text-center text-secondary text-2xl font-semibold mb-4">Interior Painting</h3>
                            <p className="flex justify-center text-center font-light text-tertiary-dark leading-relaxed">
                                From walls to ceilings, to cabinet doors and basement floors&mdash;we've got all of your interior painting needs covered.
                            </p>
                        </div>
                    </FadeIn>
                    <FadeIn>
                        <div className="flex-col max-w-sm mx-auto">
                            <div className="flex justify-center">
                                <div className="border border-tertiary-dark bg-primary h-16 w-16 rounded-full flex justify-center items-center transform transition duration-500 hover:scale-110 my-6">
                                    <HiHome className='h-8 w-8 text-secondary' />
                                </div>
                            </div>
                            <h3 className="flex justify-center text-center text-secondary text-2xl font-semibold mb-4">Exterior Painting</h3>
                            <p className="flex justify-center text-center font-light text-tertiary-dark leading-relaxed">
                                Masonry or wood siding, brick, stone, foundations, window/door trim, garages and sheds&mdash;we can make your exterior look new again.
                            </p>
                        </div>
                    </FadeIn>
                    <FadeIn>
                        <div className="flex-col max-w-sm mx-auto">
                            <div className="flex justify-center">
                                <div className="border border-tertiary-dark bg-primary h-16 w-16 rounded-full flex justify-center items-center transform transition duration-500 hover:scale-110 my-6">
                                    <FaPaintBrush className='h-8 w-8 text-secondary' />
                                </div>
                            </div>
                            <h3 className="flex justify-center text-center text-secondary text-2xl font-semibold mb-4">Staining</h3>
                            <p className="flex justify-center text-center font-light text-tertiary-dark leading-relaxed">
                                Interior doors, cabinets, bathroom vanities, and more, to decks and fences&mdash;we do regular staining as well as unique custom finishing techniques to make your project really stand out.
                            </p>
                        </div>
                    </FadeIn>
                    <FadeIn>
                        <div className="flex-col max-w-sm mx-auto">
                            <div className="flex justify-center">
                                <div className="border border-tertiary-dark bg-primary h-16 w-16 rounded-full flex justify-center items-center transform transition duration-500 hover:scale-110 my-6">
                                    <FaEllipsisV className='h-8 w-8 text-secondary' />
                                </div>
                            </div>
                            <h3 className="flex justify-center text-center text-secondary text-2xl font-semibold mb-4">And More!</h3>
                            <p className="flex justify-center text-center font-light text-tertiary-dark leading-relaxed">
                                We also offer other services such as power washing, sanding, caulking, wallpaper removal, and minor drywall repair. Don't see a specific service listed here? Just ask!
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </div>

            <div className="inline-block w-full bg-black bg-opacity-70 mb-8">
                <BackgroundImage
                    {...contactUsBgImage}
                    preserveStackingContext
                >
                    <div className="flex-col md:px-8 px-4 md:py-20 py-10">
                        <FadeIn>
                            <div className="flex justify-center">
                                <h2 className="lg:text-5xl md:text-4xl text-3xl font-semibold text-white text-center items-center">LET'S GET IN TOUCH</h2>
                            </div>
                        </FadeIn>
                        <FadeIn>
                            <p className="text-center max-w-xl md:text-base text-sm text-light text-white mx-auto px-8 my-7">
                                Need our professional services for your home or business? 
                                Contact us today for a free esimate of your next project!
                            </p>
                        </FadeIn>
                        <FadeIn>
                            <div className="flex">
                                <div className="mx-auto my-2">
                                    <Link to="/contact-us" className="px-4 py-2 text-lg text-secondary font-bold bg-primary border border-tertiary rounded-full hover:bg-primary-light transition duration-200">FREE ESTIMATE</Link>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </BackgroundImage>
            </div>

            <FadeIn>
                <Testimonials />
            </FadeIn>

        </Layout>
    )
}

export default ServicesPage

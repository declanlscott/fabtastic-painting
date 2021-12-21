import React from 'react'

import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import { FaBrush, FaPaintRoller, FaPaintBrush } from "react-icons/fa"
import { HiOutlineHome, HiHome } from "react-icons/hi"
import { GiWaterSplash } from "react-icons/gi"

const Services = () => {
    return (
        <div className="md:flex justify-center my-8 md:mt-32 md:mb-16 mx-8">
            <div className="flex items-center justify-center">
                <StaticImage
                    className=""
                    src="../images/services.webp"
                    alt="Services"
                    placeholder="none"
                    width={480}
                    height={600}
                />
            </div>
            <div className="flex items-center justify-center">
                <div className="flex-col text-secondary md:ml-16 mt-10 md:mt-0">
                    <h3 className="flex font-medium tracking-widest mb-2">HIGH QUALITY &amp; AFFORDABLE</h3>
                    <h2 className="flex font-semibold text-4xl sm:text-5xl mb-7">SERVICES WE PROVIDE</h2>
                    <p className="flex font-light text-base max-w-lg mb-10">
                        We pride ourselves on our service, starting from your personal consultation all the way to the final walk-through.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:gap-4">
                        <div className="flex-col">
                            <div className="flex items-center font-lg font-medium pb-8">
                                <FaBrush className="w-8 h-8 mr-4" />
                                Residential Painting
                            </div>
                            <div className="flex items-center font-lg font-medium pb-8">
                                <HiOutlineHome className="w-8 h-8 mr-4" />
                                Interior Painting
                            </div>
                            <div className="flex items-center font-lg font-medium pb-8">
                                <GiWaterSplash className="w-8 h-8 mr-4" />
                                Power Washing
                            </div>
                        </div>
                        <div className="flex-col">
                            <div className="flex items-center font-lg font-medium pb-8">
                                <FaPaintRoller className="w-8 h-8 mr-4" />
                                Commerical Painting
                            </div>
                            <div className="flex items-center font-lg font-medium pb-8">
                                <HiHome className="w-8 h-8 mr-4" />
                                Exterior Painting
                            </div>
                            <div className="flex items-center font-lg font-medium pb-8">
                                <FaPaintBrush className="w-8 h-8 mr-4" />
                                Staining
                            </div>
                        </div>
                    </div>
                    <div className="flex mt-4">
                        <div className="mx-auto">
                            <Link to="/services" className="mx-auto px-4 py-2 text-lg font-bold bg-primary rounded-full hover:bg-primary-light transition duration-200">
                                AND MORE!
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services

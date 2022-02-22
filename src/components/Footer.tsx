import React from 'react'

import { MdLocationOn } from 'react-icons/md'
import { FaPhoneAlt, FaEnvelope, FaClock, FaFacebookF, FaInstagram } from 'react-icons/fa'

const Footer: React.FC = () => {
    return (
        <footer className="bg-black">
            <div className="max-w-7xl mx-auto md:px-8 px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-white pt-8 pb-14">
                    <div className="flex-col">
                        <h4 className="flex justify-center text-lg font-bold mb-4">ABOUT US</h4>
                        <div className="flex">
                            <a
                                className="my-auto"
                                style={{textDecoration: "none", objectFit: "cover", minWidth: "80px", maxWidth: "80px"}}
                                target="_blank"
                                title="Click for the Business Profile for Fabtastic Painting LLC"
                                href="https://www.bbb.org/us/ia/cedar-rapids/profile/painting-contractors/fabtastic-painting-llc-0664-32134056?utm_campaign=bbb_seal&utm_content=Fabtastic%20Painting%20LLC&utm_medium=website&utm_source=seal_click_32134056"
                            >
                                <img
                                    alt="Click for the Business Profile for Fabtastic Painting LLC"
                                    src="https://www.bbb.org/TerminusContent/dist/img/dynamic-seal/ab-seal-vertical-blue.svg"
                                />
                            </a>
                            <p className="text-sm ml-2">
                                Fabtastic Painting is a woman-owned company. We are 
                                a BBB Accredited Business. Focused on residential 
                                and commercial painting. Specializing in interior &amp; exterior 
                                painting. Serving the Cedar Rapids &amp; Iowa City corridor. 
                                State registered &amp; insured.
                            </p>
                        </div>
                    </div>
                    <div className="flex-col">
                        <h4 className="flex justify-center text-lg font-bold mb-4">CONTACT US</h4>
                        <div className="flex items-center text-sm pl-10 pb-3">
                            <MdLocationOn className="mr-2"/>
                            Cedar Rapids, IA 52404-2803
                        </div>
                        <div className="flex items-center text-sm pl-10 pb-3">
                            <FaPhoneAlt className="mr-2"/>
                            <a href="tel:+1319-202-4769" className="text-white text-sm font-light hover:text-primary transition duration-200">(319) 202-4769</a>
                        </div>
                        <div className="flex items-center text-sm pl-10 pb-3">
                            <FaEnvelope className="mr-2"/>
                            <a href="mailto:fabtasticpainting@gmail.com" className="text-white text-sm font-light hover:text-primary transition duration-200">fabtasticpainting@gmail.com</a>
                        </div>
                        <div className="flex items-center text-sm pl-10">
                            <FaClock className="mr-2"/>
                            Mon - Fri 8AM - 7PM / Sat - Sun 10AM - 4PM
                        </div>
                    </div>
                    <div className="flex-col">
                        <h4 className="flex justify-center text-lg font-bold mb-4">LIKE &amp; FOLLOW US</h4>
                        <div className="flex justify-center space-x-11">
                            <a href="https://www.facebook.com/FabtasticPainting/" target="_blank">
                                <FaFacebookF className="w-12 h-12 hover:text-primary transition duration-200 px-2" />
                            </a>
                            <a href="https://www.instagram.com/fabtastic_paintingcr/" target="_blank">
                                <FaInstagram className="w-14 h-14 hover:text-primary transition duration-200 px-2" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center text-white font-light text-sm text-center py-5 md:px-8 px-4">
                <p>&copy; {new Date().getFullYear()} Fabtastic Painting LLC - All Rights Reserved.</p>
            </div>
        </footer>
    )
}

export default Footer

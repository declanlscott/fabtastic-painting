import React from 'react'
import { Link } from 'gatsby'

import { FaRegEnvelope, FaPhoneAlt, FaFacebookF, FaInstagram, FaWhatsapp, FaFacebookMessenger } from 'react-icons/fa'
import { BsArrowRight } from 'react-icons/bs'

const ContactBar: React.FC = () => {
    return (
        <div className="hidden md:block bg-secondary">
            <div className="max-w-7xl mx-auto md:px-8 sm:px-4 px-2">
                <div className="flex justify-between">
                    <div className="flex space-x-12 my-2">
                        <div className="flex items-center">
                            <FaRegEnvelope className="text-primary mr-2" />
                            <a href="mailto:fabtasticpainting@gmail.com" className="text-white text-sm font-light hover:text-primary transition duration-200">fabtasticpainting@gmail.com</a>
                        </div>
                        <div className="flex items-center">
                            <FaPhoneAlt className="text-primary mr-2" />
                            <a href="tel:+1319-202-4769" className="text-white text-sm font-light hover:text-primary transition duration-200">(319) 202-4769</a>
                        </div>
                    </div>
                    <div className="flex items-center space-x-12">
                        <div className="flex space-x-5 my-2">
                            <div className="flex items-center">
                                <a href="https://www.facebook.com/FabtasticPainting/" target="_blank">
                                    <FaFacebookF className="text-white hover:text-primary transition duration-200" />
                                </a>
                            </div>
                            <div className="flex items-center">
                                <a href="https://www.instagram.com/fabtastic_paintingcr/" target="_blank">
                                    <FaInstagram className="text-white hover:text-primary transition duration-200" />
                                </a>
                            </div>
                            <div className="flex items-center">
                                <a href="https://wa.me/13192024769" target="_blank">
                                    <FaWhatsapp className="text-white hover:text-primary transition duration-200" />
                                </a>
                            </div>
                            <div className="flex items-center">
                                <a href="https://m.me/fabtasticpainting" target="_blank">
                                    <FaFacebookMessenger className="text-white hover:text-primary transition duration-200" />
                                </a>
                            </div>
                        </div>
                        <div className="flex items-center my-2 text-white hover:text-primary transition duration-200">
                            <Link to="/contact-us" className="text-sm font-light mr-2">Contact Us</Link>
                            <BsArrowRight />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactBar

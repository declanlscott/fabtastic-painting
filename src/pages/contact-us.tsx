import React from 'react'

import Layout from '../components/Layout'
import Seo from '../components/Seo'
import Banner from '../components/Banner'
import ContactUsForm from '../components/ContactUsForm'
import FadeIn from '../components/FadeIn'

import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaWhatsapp, FaFacebookMessenger, FaClock } from 'react-icons/fa'
import { MdLocationOn } from 'react-icons/md'

const ContactUsPage: React.FC = () => {
    return (
        <Layout>

            <Seo pageTitle="Contact Us" />
            
            <Banner pageTitle="Contact Us" />

            <div className="max-w-7xl mx-auto md:px-8 px-4">
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-y-20 my-24">
                    <FadeIn>
                        <div className="flex-col">
                            <div className="flex justify-center">
                                <div className="bg-secondary h-16 w-16 rounded-full flex justify-center items-center transform transition duration-500 hover:scale-110 my-6">
                                    <FaPhoneAlt className='h-8 w-8 text-white' />
                                </div>
                            </div>
                            <h3 className="flex justify-center text-secondary text-2xl font-semibold mb-1">Call Us</h3>
                            <a className="flex justify-center text-center text-tertiary hover:text-tertiary-dark transition duration-200" href="tel:+1319-202-4769">(319) 202-4769</a>
                        </div>
                    </FadeIn>
                    <FadeIn>
                        <div className="flex-col">
                            <div className="flex justify-center">
                                <div className="bg-secondary h-16 w-16 rounded-full flex justify-center items-center transform transition duration-500 hover:scale-110 my-6">
                                    <FaEnvelope className='h-8 w-8 text-white' />
                                </div>
                            </div>
                            <h3 className="flex justify-center text-secondary text-2xl font-semibold mb-1">Email Us</h3>
                            <a className="flex justify-center text-center text-tertiary hover:text-tertiary-dark transition duration-200" href="mailto:fabtasticpainting@gmail.com">fabtasticpainting@gmail.com</a>
                        </div>
                    </FadeIn>
                    <FadeIn>
                        <div className="flex-col">
                            <div className="flex justify-center">
                                <div className="bg-secondary h-16 w-16 rounded-full flex justify-center items-center transform transition duration-500 hover:scale-110 my-6">
                                    <FaFacebookF className='h-8 w-8 text-white' />
                                </div>
                            </div>
                            <h3 className="flex justify-center text-secondary text-2xl font-semibold mb-1">Facebook</h3>
                            <a className="flex justify-center text-center text-tertiary hover:text-tertiary-dark transition duration-200" href="https://www.facebook.com/FabtasticPainting/" target="_blank">Fabtastic Painting</a>
                        </div>
                    </FadeIn>
                    <FadeIn>
                        <div className="flex-col">
                            <div className="flex justify-center">
                                <div className="bg-secondary h-16 w-16 rounded-full flex justify-center items-center transform transition duration-500 hover:scale-110 my-6">
                                    <FaInstagram className='h-8 w-8 text-white' />
                                </div>
                            </div>
                            <h3 className="flex justify-center text-secondary text-2xl font-semibold mb-1">Instagram</h3>
                            <a className="flex justify-center text-center text-tertiary hover:text-tertiary-dark transition duration-200" href="https://www.instagram.com/fabtastic_paintingcr/" target="_blank">@fabtastic_paintingcr</a>
                        </div>
                    </FadeIn>
                    <FadeIn>
                        <div className="flex-col">
                            <div className="flex justify-center">
                                <div className="bg-secondary h-16 w-16 rounded-full flex justify-center items-center transform transition duration-500 hover:scale-110 my-6">
                                    <FaWhatsapp className='h-8 w-8 text-white' />
                                </div>
                            </div>
                            <h3 className="flex justify-center text-secondary text-2xl font-semibold mb-1">WhatsApp</h3>
                            <a className="flex justify-center text-center text-tertiary hover:text-tertiary-dark transition duration-200" href="https://wa.me/13192024769" target="_blank">(319) 202-4769</a>
                        </div>
                    </FadeIn>
                    <FadeIn>
                        <div className="flex-col">
                            <div className="flex justify-center">
                                <div className="bg-secondary h-16 w-16 rounded-full flex justify-center items-center transform transition duration-500 hover:scale-110 my-6">
                                    <FaFacebookMessenger className='h-8 w-8 text-white' />
                                </div>
                            </div>
                            <h3 className="flex justify-center text-secondary text-2xl font-semibold mb-1">Messenger</h3>
                            <a className="flex justify-center text-center text-tertiary hover:text-tertiary-dark transition duration-200" href="https://m.me/fabtasticpainting" target="_blank">fabtasticpainting</a>
                        </div>
                    </FadeIn>
                    <FadeIn>
                        <div className="flex-col">
                            <div className="flex justify-center">
                                <div className="bg-secondary h-16 w-16 rounded-full flex justify-center items-center transform transition duration-500 hover:scale-110 my-6">
                                    <MdLocationOn className='h-8 w-8 text-white' />
                                </div>
                            </div>
                            <h3 className="flex justify-center text-secondary text-2xl font-semibold mb-1">Location</h3>
                            <p className="flex justify-center text-center text-tertiary hover:text-tertiary-dark transition duration-200">Cedar Rapids, IA 52404</p>
                        </div>
                    </FadeIn>
                    <FadeIn>
                        <div className="flex-col">
                            <div className="flex justify-center">
                                <div className="bg-secondary h-16 w-16 rounded-full flex justify-center items-center transform transition duration-500 hover:scale-110 my-6">
                                    <FaClock className='h-8 w-8 text-white' />
                                </div>
                            </div>
                            <h3 className="flex justify-center text-secondary text-2xl font-semibold mb-1">Hours</h3>
                            <p className="flex justify-center text-center text-tertiary hover:text-tertiary-dark transition duration-200">Mon - Fri 8AM - 7PM <br />Sat - Sun 10AM - 4PM</p>
                        </div>
                    </FadeIn>
                </div>
            </div>

            <div className="bg-primary">
                <FadeIn>
                    <div className="max-w-7xl mx-auto md:px-8 px-4">
                        <div className="grid sm:grid-cols-3 grid-cols-1 gap-x-8 py-16 text-secondary">
                            <div className='flex justify-center items-center text-center font-semibold lg:text-4xl md:text-4xl text-2xl transform transition duration-500 hover:scale-110 my-6'>Andrea Osmundson</div>
                            <div className='flex justify-center items-center text-center font-medium lg:text-2xl md:text-xl text-lg my-6'>Owners / Operators</div>
                            <div className='flex justify-center items-center text-center font-semibold lg:text-4xl md:text-4xl text-2xl transform transition duration-500 hover:scale-110 my-6'>Korrey Mayland</div>
                        </div>
                    </div>
                </FadeIn>
                <div className="grid xl:grid-cols-2 grid-cols-1 gap-y-16">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d380457.287486531!2d-91.89897630769288!3d41.84288354117182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87e4f767d2f40001%3A0x340d8f914c30c725!2sFabtastic%20painting!5e0!3m2!1sen!2sus!4v1640101220059!5m2!1sen!2sus" height="600" loading="lazy" className="border-0 w-full" />
                    <div className="flex justify-center items-center">
                        <div className="mx-8">
                            <h2 className="flex justify-center font-bold text-4xl sm:text-5xl text-secondary mb-7">GET IN TOUCH</h2>
                            <div className="flex justify-center mb-16 xl:mb-0">
                                <ContactUsForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Layout>
    )
}

export default ContactUsPage

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
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 322.72 448.78"><defs><clipPath id="clip-path" transform="translate(0 -.3)"><path className="cls-1" d="M0 0h327v463H0z"/></clipPath><clipPath id="clip-path-2" transform="translate(0 -.3)"><path className="cls-1" d="M.06.3H326.1v462.64H.06z"/></clipPath><style>{`.cls-1{fill:none}.cls-2{clip-path:url(#clip-path)}.cls-3{fill:#015a75}.cls-4{fill:#fff}`}</style></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><g className="cls-2"><path className="cls-3" d="M279.28 427.48v-.12a21.72 21.72 0 0 1 43.44-.12v.12a21.72 21.72 0 0 1-43.44.12zm41.46-.12v-.12a19.74 19.74 0 1 0-39.48.12v.12a19.74 19.74 0 1 0 39.48-.12zm-28.26-11.76h10a9.27 9.27 0 0 1 6.6 2.34 5.86 5.86 0 0 1 1.8 4.32v.12c0 3.6-2.4 5.76-5.76 6.54l6.9 8.94h-4.12l-6.42-8.4h-5.7v8.4h-3.3zm9.66 10.92c3.12 0 5.28-1.44 5.28-4v-.12c0-2.34-1.92-3.84-5.1-3.84h-6.54v7.92z" transform="translate(0 -.3)"/><path className="cls-4" d="M245.51 447.61H27.17a26 26 0 0 1-25.76-26.2V27.93a26 26 0 0 1 25.76-26.2h218.34a26 26 0 0 1 25.76 26.2v393.48a26 26 0 0 1-25.76 26.21" transform="translate(0 -.3)"/></g><path d="M245.51 447.61H27.17a26 26 0 0 1-25.76-26.2V27.93a26 26 0 0 1 25.76-26.2h218.34a26 26 0 0 1 25.76 26.2v393.48a26 26 0 0 1-25.76 26.2z" transform="translate(0 -.3)" stroke="#005f84" fill="none"/><g className="cls-2"><path className="cls-3" d="M245.51.8a26.93 26.93 0 0 1 26.67 27.13v393.48a26.93 26.93 0 0 1-26.67 27.13H27.17A26.93 26.93 0 0 1 .5 421.41V27.93A26.93 26.93 0 0 1 27.17.8h218.34m0 1.85H27.17A25.09 25.09 0 0 0 2.32 27.93v393.48a25.09 25.09 0 0 0 24.85 25.28h218.34a25.09 25.09 0 0 0 24.85-25.28V27.93a25.09 25.09 0 0 0-24.85-25.28z" transform="translate(0 -.3)"/></g><path d="M245.51.8a26.93 26.93 0 0 1 26.67 27.13v393.48a26.93 26.93 0 0 1-26.67 27.13H27.17A26.93 26.93 0 0 1 .5 421.41V27.93A26.93 26.93 0 0 1 27.17.8h218.34m0 1.85H27.17A25.09 25.09 0 0 0 2.32 27.93v393.48a25.09 25.09 0 0 0 24.85 25.28h218.34a25.09 25.09 0 0 0 24.85-25.28V27.93a25.09 25.09 0 0 0-24.85-25.28z" transform="translate(0 -.3)" stroke="#015a75" fill="none"/><g className="cls-2"><path d="M263.92 360v61.84A19 19 0 0 1 245.1 441H26.75a19 19 0 0 1-18.82-19.19V360h256" transform="translate(0 -.3)" fill="#005f84"/><path className="cls-3" d="M272.18 356.49v68.87c0 11.77-8.89 21.33-19.85 21.33H22.17c-11 0-19.85-9.56-19.85-21.33v-68.87h269.86" transform="translate(0 -.3)"/><path className="cls-4" d="M34.71 374.83h4.65l9.83 23.51h-5.27l-2.1-5.23h-9.7L30 398.34h-5.12l9.83-23.51M40 388.57 37 381l-3 7.57zm10.25-1.83v-.06a11.76 11.76 0 0 1 12-12.07 11.73 11.73 0 0 1 9 3.6L68 382a8.41 8.41 0 0 0-5.87-2.64c-3.87 0-6.66 3.27-6.66 7.27v.07c0 4 2.72 7.33 6.66 7.33 2.62 0 4.23-1.07 6-2.73l3.21 3.3a12.06 12.06 0 0 1-21.18-7.84m23.62-.02v-.06a12.31 12.31 0 0 1 21-8.47l-3.2 3.79a8.41 8.41 0 0 0-5.87-2.64c-3.87 0-6.65 3.27-6.65 7.27v.07c0 4 2.72 7.33 6.65 7.33 2.62 0 4.23-1.07 6-2.73l3.21 3.3a12.06 12.06 0 0 1-21.18-7.84M99 375h10.49a9.06 9.06 0 0 1 6.69 2.37 7.4 7.4 0 0 1 2 5.33v.07a7.24 7.24 0 0 1-4.92 7.24l5.6 8.34h-5.9l-4.96-7.47h-4v7.47h-5V375m10.16 11.34c2.46 0 3.87-1.33 3.87-3.3V383c0-2.2-1.51-3.33-4-3.33h-5v6.7z" transform="translate(0 -.3)"/><path className="cls-4" d="M122.67 374.7h17.31v4.57h-12.29V384h10.82v4.57h-10.82v4.91h12.46v4.56h-17.48V374.7"/><path className="cls-4" d="M144.63 375h8.95c7.21 0 12.19 5 12.19 11.61v.07c0 6.57-5 11.67-12.19 11.67h-8.95V375m8.95 18.71a6.59 6.59 0 0 0 6.92-7v-.06a6.65 6.65 0 0 0-6.92-7h-3.9v14.07z" transform="translate(0 -.3)"/><path className="cls-4" d="M170.49 374.7h5.05v23.34h-5.05zm16.12 4.74h-6.98v-4.74h19.01v4.74h-6.98v18.6h-5.05v-18.6m15.89-4.74h17.31v4.57h-12.29V384h10.82v4.57h-10.82v4.91h12.46v4.56H202.5V374.7"/><path className="cls-4" d="M224.46 375h8.95c7.21 0 12.19 5 12.19 11.61v.07c0 6.57-5 11.67-12.19 11.67h-8.95V375m8.95 18.71a6.59 6.59 0 0 0 6.92-7v-.06a6.65 6.65 0 0 0-6.92-7h-3.9v14.07zM53.52 406.49h10.66a8.2 8.2 0 0 1 6 2.07 5.39 5.39 0 0 1 1.57 4v.07a5.44 5.44 0 0 1-3 5c2.65 1 4.29 2.6 4.29 5.74v.07c0 4.27-3.41 6.4-8.59 6.4H53.52v-23.35m9.57 9.44c2.23 0 3.64-.73 3.64-2.47v-.07c0-1.53-1.18-2.4-3.31-2.4h-5v4.93zm1.34 9.4c2.23 0 3.57-.8 3.57-2.53v-.06c0-1.57-1.15-2.53-3.74-2.53h-5.82v5.13zm12.39-5.5v-13.34h5v13.21c0 3.8 1.87 5.77 4.95 5.77s4.95-1.9 4.95-5.6v-13.38h5v13.17c0 7.07-3.9 10.54-10.06 10.54s-9.93-3.5-9.93-10.37m23.66 6.6 3-3.64a10.43 10.43 0 0 0 6.85 2.84c2.06 0 3.31-.84 3.31-2.2v-.07c0-1.3-.79-2-4.62-3-4.62-1.2-7.6-2.5-7.6-7.13v-.07c0-4.24 3.34-7 8-7a13.14 13.14 0 0 1 8.52 3l-2.61 3.84a10.66 10.66 0 0 0-6-2.3c-1.93 0-2.95.9-2.95 2v.07c0 1.53 1 2 4.95 3.07 4.65 1.23 7.28 2.93 7.28 7v.07c0 4.64-3.48 7.24-8.43 7.24a14.46 14.46 0 0 1-9.74-3.73" transform="translate(0 -.3)"/><path className="cls-4" d="M123.16 406.19h5.05v23.34h-5.05zm10.78 0h4.66l10.75 14.37v-14.37h4.98v23.34h-4.29l-11.11-14.84v14.84h-4.99v-23.34m25.89 0h17.31v4.57h-12.29v4.73h10.81v4.57h-10.81v4.9h12.45v4.57h-17.47v-23.34"/><path className="cls-4" d="m180.22 426.43 3-3.64a10.43 10.43 0 0 0 6.85 2.84c2.06 0 3.31-.84 3.31-2.2v-.07c0-1.3-.79-2-4.62-3-4.62-1.2-7.6-2.5-7.6-7.13v-.07c0-4.24 3.34-7 8-7a13.14 13.14 0 0 1 8.52 3l-2.62 3.84a10.65 10.65 0 0 0-6-2.3c-1.94 0-3 .9-3 2v.07c0 1.53 1 2 4.95 3.07 4.65 1.23 7.28 2.93 7.28 7v.07c0 4.64-3.47 7.24-8.42 7.24a14.46 14.46 0 0 1-9.74-3.73m20.73.01 3-3.64a10.43 10.43 0 0 0 6.85 2.84c2.07 0 3.31-.84 3.31-2.2v-.07c0-1.3-.79-2-4.62-3-4.62-1.2-7.6-2.5-7.6-7.13v-.07c0-4.24 3.34-7 8-7a13.13 13.13 0 0 1 8.52 3l-2.61 3.84a10.66 10.66 0 0 0-6-2.3c-1.93 0-3 .9-3 2v.07c0 1.53 1 2 5 3.07 4.65 1.23 7.28 2.93 7.28 7v.07c0 4.64-3.47 7.24-8.42 7.24a14.46 14.46 0 0 1-9.74-3.73" transform="translate(0 -.3)"/><path className="cls-3" d="M193.03 223.61H78.97l-4.14 13.69h30.39l5.8 18.89h49.97l5.78-18.89h30.4l-4.14-13.69"/><path className="cls-3" d="M97.58 147a27.14 27.14 0 0 0 6 37.81l27.29 19.91a6.8 6.8 0 0 1 1.5 9.46l4.12 3 14.42-20a27 27 0 0 0 5.14-15.84 27.49 27.49 0 0 0-.34-4.31 26.93 26.93 0 0 0-10.8-17.66l-27.3-19.91a6.74 6.74 0 0 1-2.7-4.42 7.19 7.19 0 0 1-.09-1.09 6.72 6.72 0 0 1 1.28-4l-4.1-3L97.58 147M114 67a39.08 39.08 0 0 0-7.45 23 39.94 39.94 0 0 0 .49 6.25 39 39 0 0 0 15.67 25.61l34.31 25a20.92 20.92 0 0 1 8.4 13.72 21.24 21.24 0 0 1 .26 3.34 21 21 0 0 1-4 12.32l3.29 2.39L192 141a39.36 39.36 0 0 0-8.7-54.83l-41.4-30.23A12.13 12.13 0 0 1 139.21 39l-3.29-2.39L114 67M44 267.91h31.2c7.69 0 13.75 2.13 17.6 6a15.53 15.53 0 0 1 4.61 11.49v.19c0 7.63-4 11.88-8.85 14.58 7.79 3 12.6 7.53 12.6 16.61v.22c0 12.35-10 18.54-25.19 18.54H44v-67.63m28 27.33c6.54 0 10.67-2.12 10.67-7.15v-.19c0-4.44-3.46-7-9.71-7H58.37v14.29zm4 27.22c6.54 0 10.48-2.32 10.48-7.33v-.2c0-4.54-3.37-7.34-11-7.34H58.37v14.87zm31.6-54.55h31.25c7.7 0 13.75 2.13 17.6 6a15.54 15.54 0 0 1 4.61 11.49v.19c0 7.63-4 11.88-8.84 14.58 7.79 3 12.59 7.53 12.59 16.61v.22c0 12.35-10 18.54-25.19 18.54h-32v-67.63m28.07 27.33c6.54 0 10.68-2.12 10.68-7.15v-.19c0-4.44-3.46-7-9.71-7H122v14.29zm3.94 27.22c6.54 0 10.48-2.32 10.48-7.33v-.2c0-4.54-3.37-7.34-11-7.34H122v14.87zm31.62-54.55h31.25c7.69 0 13.75 2.13 17.6 6a15.53 15.53 0 0 1 4.61 11.49v.19c0 7.63-4 11.88-8.85 14.58 7.79 3 12.6 7.53 12.6 16.61v.22c0 12.35-10 18.54-25.2 18.54h-32v-67.63m28.07 27.33c6.53 0 10.67-2.12 10.67-7.15v-.19c0-4.44-3.46-7-9.71-7h-14.62v14.29zm3.94 27.22c6.54 0 10.48-2.32 10.48-7.33v-.2c0-4.54-3.37-7.34-11-7.34h-17.08v14.87z" transform="translate(0 -.3)"/></g></g></g></svg>
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

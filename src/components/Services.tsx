import React from 'react'

import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import { FaBrush, FaPaintRoller, FaPaintBrush } from "react-icons/fa"
import { HiOutlineHome, HiHome } from "react-icons/hi"
import { GiWaterSplash } from "react-icons/gi"

const Services = () => {
    return (
        <>
            <div className="flex justify-center mx-8 my-8 md:mt-16">
                <a
                    className="w-96"
                    style={{textDecoration: "none"}}
                    target="_blank"
                    title="Click for the Business Profile for Fabtastic Painting LLC"
                    href="https://www.bbb.org/us/ia/cedar-rapids/profile/painting-contractors/fabtastic-painting-llc-0664-32134056?utm_campaign=bbb_seal&utm_content=Fabtastic%20Painting%20LLC&utm_medium=website&utm_source=seal_click_32134056"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 735.1 257.42"><path d="M235.811 255H34.294c-18.99-1.685-31.075-14.77-30.745-31.745V33.745C3.858 16.449 15.974 3.373 34.294 2h201.517v253z" fill="#FFF"/><path fill="#015a75" d="M681.89 223.62V33.8a31.16 31.16 0 0 0-31.16-31.16H235v252.14h415.73a31.16 31.16 0 0 0 31.16-31.16"/><path fill="#015a75" d="M650.73 257.42H232.37V0h418.36a33.84 33.84 0 0 1 33.8 33.8v189.82a33.84 33.84 0 0 1-33.8 33.8m-413.08-5.28h413.08a28.55 28.55 0 0 0 28.52-28.52V33.8a28.55 28.55 0 0 0-28.52-28.52H237.65zM102.95 85.09l-10.87 15c-5.45 7.51-3.76 20.81 3.68 26.18l20.16 14.55c3.46 2.5 3.73 5 2.09 7.61l2.93 2.18 10.21-14.14c6.31-8.74 5.76-20.63-3.6-27.44l-20.34-14.82c-2.43-1.78-2.69-4.25-1.34-7l-2.93-2.09m17.45-66.23L103.46 42.3c-7.94 10.98-5.05 29.7 5.8 37.7l27.83 20.43c5.64 4.14 6.38 14.69 2.27 20.09l2.36 1.77 19.2-27c8.62-12.13 8.12-30.05-5.42-39.88l-29.77-21.63c-4.17-3-6.25-8.17-2.78-13.08l-2.56-1.81M75.78 165.72h22.43l4 13.6h36.66l4-13.6h22.44l-2.94-10H78.72l-2.94 10m10.51 45.5c3.94-2.31 6.36-5.7 6.36-10.35 0-9.29-7.61-13.08-15.92-13.08h-23.2v49.33h23c9.82 0 20.22-4.29 18.54-15.59-1-6.47-3.56-8-8.77-10.32M64 197.23h12.08c7.53 0 7.8 10.52.47 10.52H64zm13.47 30.57H64v-11.25h13.47c9.89 0 9.28 11.25 0 11.25zm54.88-16.58c3.94-2.31 6.36-5.7 6.36-10.35 0-9.29-7.61-13.08-15.92-13.08h-23.2v49.33h23c9.81 0 20.22-4.29 18.54-15.59-1-6.47-3.56-8-8.77-10.32m-22.26-14h12.05c7.53 0 7.8 10.52.47 10.52h-12.53zm13.44 30.58h-13.45v-11.24h13.44c9.88 0 9.28 11.25 0 11.25zm63.64-6.25c-1-6.47-3.56-8-8.77-10.32 3.94-2.31 6.36-5.7 6.36-10.35 0-9.29-7.61-13.08-15.92-13.08h-23.2v49.33h23c9.81 0 20.22-4.29 18.54-15.59m-31-24.31h12.01c7.53 0 7.8 10.52.47 10.52h-12.52zm13.44 30.58h-13.48v-11.25h13.44c9.88 0 9.28 11.25 0 11.25z"/><path d="m300.48 118.38-2.25-6.21H282.5l-2.31 6.21h-8.91l14.19-36.68h9.79l14.13 36.68zM290.37 89.5l-5.72 15.78h11.44zm21.06 10.56c0-11.27 8.52-19 19.52-19a16.79 16.79 0 0 1 15.34 9l-6.71 3.3A9.94 9.94 0 0 0 331 88c-6.65 0-11.49 5.11-11.49 12s4.84 12 11.49 12a9.83 9.83 0 0 0 8.63-5.33l6.67 3.33c-2.64 4.56-7.26 9-15.34 9-10.96 0-19.53-7.66-19.53-18.94zm38.17 0c0-11.27 8.52-19 19.52-19a16.79 16.79 0 0 1 15.34 9l-6.71 3.3a9.94 9.94 0 0 0-8.63-5.36c-6.65 0-11.49 5.11-11.49 12s4.84 12 11.49 12a9.83 9.83 0 0 0 8.63-5.33l6.71 3.24c-2.64 4.56-7.26 9-15.34 9-10.99.09-19.52-7.57-19.52-18.85zm60.66 18.32-7.2-13h-5.72v13h-7.81V81.7h17.16c7.64 0 12.32 5 12.32 11.82 0 6.49-4.07 10-8 10.89l8.25 14zm.74-24.86c0-3.08-2.36-4.95-5.5-4.95h-8.19v9.9h8.19c3.17 0 5.5-1.87 5.5-4.95zm14.28 24.86V81.7h26v6.87h-18.19v7.75h17.76v6.87h-17.76v8.3h18.15v6.87zm32.45 0V81.7h14.46c11.49 0 19.47 7.31 19.47 18.37s-8 18.31-19.47 18.31zm26-18.31c0-6.49-4-11.49-11.49-11.49h-6.65v22.92h6.65c7.21 0 11.45-5.22 11.45-11.44zm13.88 18.31V81.7h7.81v36.68zm23.92 0V88.57H510.8V81.7h29.26v6.87h-10.67v29.81zm23.92 0V81.7h26v6.87h-18.19v7.75H571v6.87h-17.74v8.3h18.15v6.87zm32.45 0V81.7h14.46c11.49 0 19.47 7.31 19.47 18.37s-8 18.31-19.47 18.31zm26-18.31c0-6.49-4-11.49-11.49-11.49h-6.65v22.92h6.65c7.22 0 11.45-5.22 11.45-11.44zm-328.71 81.31V144.7h19.3c7 0 10.56 4.45 10.56 9.35 0 4.62-2.86 7.7-6.32 8.41 3.9.6 7 4.4 7 9 0 5.5-3.68 9.9-10.67 9.9zm21.89-26a4 4 0 0 0-4.29-4H283v8h9.79c2.63 0 4.28-1.65 4.28-3.96zm.71 15c0-2.31-1.65-4.29-4.73-4.29H283v8.52h10.06c2.94 0 4.73-1.61 4.73-4.23zm14.21-3.63V144.7h8v21.78c0 5.11 3 8.63 8.63 8.63s8.58-3.52 8.58-8.63V144.7h8v22c0 9.13-5.39 15.34-16.55 15.34S312 175.77 312 166.75zm38.26 9.46 4.23-5.94a16.08 16.08 0 0 0 11.66 4.95c4.29 0 6.38-2 6.38-4.07 0-2.69-3.41-3.46-7.42-4.45-6-1.37-13.69-3-13.69-11.38 0-6.1 5.28-11.16 13.91-11.16 5.83 0 10.67 1.76 14.3 5.11l-4.35 5.73a15.75 15.75 0 0 0-10.67-4c-3.35 0-5.22 1.49-5.22 3.68 0 2.37 3.35 3.13 7.31 4.07 6 1.43 13.75 3.25 13.75 11.55 0 6.71-4.78 11.77-14.68 11.77-7.04-.07-12.1-2.4-15.51-5.86zm35.86 5.17V144.7h7.81v36.68zm40.75 0-17.49-23.92v23.92h-7.81V144.7h8l17 23v-23h7.81v36.68zm15.18 0V144.7h26v6.87h-18.19v7.75h17.76v6.87h-17.76v8.3H468v6.87zm29.95-5.17 4.23-5.94a16.08 16.08 0 0 0 11.66 4.95c4.29 0 6.38-2 6.38-4.07 0-2.69-3.41-3.46-7.42-4.45-6-1.37-13.69-3-13.69-11.38 0-6.1 5.28-11.16 13.91-11.16 5.83 0 10.67 1.76 14.3 5.11l-4.32 5.73a15.76 15.76 0 0 0-10.67-4c-3.35 0-5.22 1.49-5.22 3.68 0 2.37 3.36 3.13 7.31 4.07 6 1.43 13.75 3.25 13.75 11.55 0 6.71-4.78 11.77-14.68 11.77-7.04-.07-12.1-2.4-15.54-5.86zm33.42 0 4.23-5.94a16.08 16.08 0 0 0 11.66 4.95c4.29 0 6.38-2 6.38-4.07 0-2.69-3.41-3.46-7.42-4.45-6-1.37-13.69-3-13.69-11.38 0-6.1 5.28-11.16 13.91-11.16 5.83 0 10.67 1.76 14.3 5.11l-4.35 5.73a15.76 15.76 0 0 0-10.67-4c-3.35 0-5.22 1.49-5.22 3.68 0 2.37 3.36 3.13 7.31 4.07 6 1.43 13.75 3.25 13.75 11.55 0 6.71-4.78 11.77-14.68 11.77-7.05-.07-12.11-2.4-15.51-5.86z" fill="#fff"/><path fill="#015a75" d="M691.66 235.75v-.12a21.72 21.72 0 0 1 43.44-.12v.12a21.72 21.72 0 0 1-43.44.12zm41.46-.12v-.12a19.74 19.74 0 1 0-39.48.12v.12a19.74 19.74 0 1 0 39.48-.12zm-28.26-11.76h10a9.27 9.27 0 0 1 6.6 2.34 5.86 5.86 0 0 1 1.8 4.32v.12c0 3.6-2.4 5.76-5.76 6.54l6.9 8.94h-4.08l-6.42-8.4h-5.7v8.4h-3.3zm9.66 10.92c3.12 0 5.28-1.44 5.28-4v-.12c0-2.34-1.92-3.84-5.1-3.84h-6.54v7.92zm-476.87 22.63H33.8A33.84 33.84 0 0 1 0 223.62V33.8A33.84 33.84 0 0 1 33.8 0h203.85v257.42M33.8 5.28A28.55 28.55 0 0 0 5.28 33.8v189.82a28.55 28.55 0 0 0 28.52 28.52h198.57V5.28z"/></svg>
                    <div className="flex justify-center pt-2">
                        <span className="text-xl md:text-2xl" style={{color: "#015A75", fontWeight: "900", fontFamily: "Arial, Helvetica, sans-serif"}}>BBB RATING: A+</span>
                    </div>
                </a>
            </div>
            <div className="md:flex justify-center my-8 md:mt-16 md:mb-16 mx-8">
                <div className="flex items-center justify-center">
                    <StaticImage
                        className=""
                        src="../images/services.webp"
                        alt="Services"
                        placeholder="none"
                        formats={["auto", "webp", "avif"]}
                        width={480}
                        height={600}
                    />
                </div>
                <div className="flex items-center justify-center">
                    <div className="flex-col text-secondary md:ml-16 mt-10 md:mt-0">
                        <h3 className="flex font-medium tracking-widest mb-2">HIGH-QUALITY &amp; AFFORDABLE</h3>
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
                                    Commercial Painting
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
                                <Link to="/services" className="mx-auto px-4 py-2 text-lg font-bold bg-primary border border-tertiary rounded-full hover:bg-primary-light transition duration-200">
                                    AND MORE!
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services

import React from 'react'

import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

import { FaPaintRoller } from 'react-icons/fa'

import FadeIn from './FadeIn'

const HeroPage: React.FC = () => {
    return (
        <div className="grid">
            <StaticImage
                className="row-start-1 col-start-1 h-full lg:h-screen"
                src="../images/hero.webp"
                alt=""
                placeholder="none"
            />
            <div className="row-start-1 col-start-1 relative grid bg-black bg-opacity-50">
                <div className="flex-col md:px-8 px-4 md:my-20 my-10">
                    <FadeIn>
                        <h1 className="flex justify-center text-center lg:text-6xl md:text-5xl text-4xl font-bold text-white">RESIDENTIAL &amp; COMMERCIAL</h1>
                    </FadeIn>
                    <FadeIn>
                        <div>
                            <div className="w-48 mx-auto flex">
                                <div className="w-full relative border-b border-primary" />
                                <FaPaintRoller className="w-8 h-8 relative top-4 text-primary mx-2" />
                                <div className="w-full relative border-b border-primary" />
                            </div>
                            <div className="w-48 h-8 mx-auto" />
                        </div>
                    </FadeIn>
                    <FadeIn>
                        <p className="text-center lg:max-w-4xl md:text-lg text-base text-white mx-auto">
                            Fabtastic Painting provides high-quality interior and exterior painting services and more for commercial and residential customers alike. 
                            We go above and beyond to make your next project look Fabtastic. No matter the size of the job, big or small, we will paint it all.
                        </p>
                    </FadeIn>
                    <FadeIn>
                        <div className="flex">
                            <div className="mx-auto mt-10 md:mt-20 mb-4">
                                <Link to="/contact-us" className="px-4 py-2 text-lg font-bold text-secondary bg-primary rounded-full hover:bg-primary-light transition duration-200">REQUEST A QUOTE</Link>
                            </div>
                        </div>
                    </FadeIn>
                    
                </div>
            </div>
        </div>
    )
}

export default HeroPage

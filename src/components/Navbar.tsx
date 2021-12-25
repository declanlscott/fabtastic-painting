import React, {useState, useEffect} from "react"
import { Link } from "gatsby"
import { StaticImage } from 'gatsby-plugin-image'

import { Transition } from "@headlessui/react"

import { HiMenu, HiX } from 'react-icons/hi'

import MobileMenu from "./MobileMenu"

interface NavbarProps {
    siteTitle: string
}

const Navbar: React.FC<NavbarProps> = ({ siteTitle }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const hideMobileMenu = () => {
            if (isOpen && window.innerWidth > 1024) {
                toggle();
            }
        }

        window.addEventListener('resize', hideMobileMenu);

        return () => {
            window.removeEventListener('resize', hideMobileMenu);
        }
    })

    return (
        <nav className="bg-black lg:sticky lg:top-0 lg:z-10">
            <div className="max-w-7xl mx-auto md:px-8 sm:px-4 px-2">
                <div className="flex justify-between">
                    <div className="flex space-x-7">
                        <Link to="/" className="flex items-center py-3">
                            <StaticImage
                                src="../images/fp-logo.jpg"
                                alt={siteTitle}
                                className="inline-block align-top"
                                placeholder="none"
                                formats={["auto", "webp", "avif"]}
                                loading="eager"
                                width={195}
                                height={125}
                            />
                        </Link>
                    </div>
                    <div className="hidden lg:flex items-center space-x-11 text-lg font-bold text-white">
                        <Link to="/" className="px-2 py-4 hover:text-primary transition duration-200" activeClassName="text-primary">HOME</Link>
                        <Link to="/about-us" className="px-2 py-4 hover:text-primary transition duration-200" activeClassName="text-primary">ABOUT US</Link>
                        <Link to="/services" className="px-2 py-4 hover:text-primary transition duration-200" activeClassName="text-primary">SERVICES</Link>
                        <Link to="/gallery" className="px-2 py-4 hover:text-primary transition duration-200" activeClassName="text-primary">GALLERY</Link>
                        <Link to="/contact-us" className="px-4 py-2 bg-tertiary rounded-full hover:bg-tertiary-dark transition duration-200">FREE ESTIMATE</Link>
                    </div>
                    <div className="lg:hidden flex items-center px-4 cursor-pointer" onClick={toggle}>
                        {!isOpen
                            ? <HiMenu className="h-8 w-8 text-primary" />
                            : <HiX className="h-8 w-8 text-primary" />
                        }
                    </div>
                </div>
            </div>
            <Transition
                show={isOpen}
                enter="transition duration-200 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
            >
                <MobileMenu isOpen={isOpen} toggle={toggle} />
            </Transition>
        </nav>
    )
}

export default Navbar

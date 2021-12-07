import React, {useState, useEffect} from "react"
import { Link } from "gatsby"
import { StaticImage } from 'gatsby-plugin-image'
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
        <nav className="bg-black">
            <div className="max-w-7xl mx-auto md:px-8 sm:px-4 px-2">
                <div className="flex justify-between">
                    <div className="flex space-x-7">
                        <Link to="/" className="flex items-center py-3">
                            <StaticImage
                                src="../images/fp-logo.webp"
                                alt={siteTitle}
                                className="inline-block align-top"
                                placeholder="none"
                                width={195}
                                height={125}
                            />
                        </Link>
                    </div>
                    <div className="hidden lg:flex items-center space-x-11 text-lg font-bold">
                        <Link to="/" className="nav-link" activeClassName="text-primary">HOME</Link>
                        <Link to="/about-us" className="nav-link" activeClassName="text-primary">ABOUT US</Link>
                        <Link to="/services" className="nav-link" activeClassName="text-primary">SERVICES</Link>
                        <Link to="/gallery" className="nav-link" activeClassName="text-primary">GALLERY</Link>
                        <Link to="/contact-us" className="nav-button">FREE ESTIMATE</Link>
                    </div>
                    <div className="lg:hidden flex items-center px-4 cursor-pointer" onClick={toggle}>
                        {isOpen
                            ? <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 stroke-current text-primary" fill="none" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            : <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 stroke-current text-primary" fill="none" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        }
                    </div>
                </div>
            </div>
            <MobileMenu isOpen={isOpen} toggle={toggle}/>
        </nav>
    )
}

export default Navbar
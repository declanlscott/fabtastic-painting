import React from 'react'
import { Link } from "gatsby"

interface MobileMenuProps {
    isOpen: boolean,
    toggle: () => void
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, toggle }) => {
    return (
        <div className={isOpen ? "text-center items-center bg-secondary text-lg font-bold text-white" : "hidden"} onClick={toggle}>
            <Link to="/" className="block px-2 py-4 hover:text-primary transition duration-200" activeClassName="text-primary">HOME</Link>
            <Link to="/about-us" className="block px-2 py-4 hover:text-primary transition duration-200" activeClassName="text-primary">ABOUT US</Link>
            <Link to="/services" className="block px-2 py-4 hover:text-primary transition duration-200" activeClassName="text-primary">SERVICES</Link>
            <Link to="/gallery" className="block px-2 py-4 hover:text-primary transition duration-200" activeClassName="text-primary">GALLERY</Link>
            <Link to="/contact-us" className="block px-2 py-4 hover:text-primary transition duration-200" activeClassName="text-primary">FREE ESTIMATE</Link>
        </div>
    )
}

export default MobileMenu

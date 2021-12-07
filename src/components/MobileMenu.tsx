import React from 'react'
import { Link } from "gatsby"

interface MobileMenuProps {
    isOpen: boolean,
    toggle: () => void
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, toggle }) => {
    return (
        <div className={isOpen ? "text-center items-center bg-secondary text-lg font-bold" : "hidden"} onClick={toggle}>
            <Link to="/" className="block nav-link" activeClassName="text-primary">HOME</Link>
            <Link to="/about-us" className="block nav-link" activeClassName="text-primary">ABOUT US</Link>
            <Link to="/services" className="block nav-link" activeClassName="text-primary">SERVICES</Link>
            <Link to="/gallery" className="block nav-link" activeClassName="text-primary">GALLERY</Link>
            <Link to="/contact-us" className="block nav-link" activeClassName="text-primary">FREE ESTIMATE</Link>
        </div>
    )
}

export default MobileMenu

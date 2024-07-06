import React, { useState } from 'react';
import Logo from "components/atoms/logos/berando";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-gray-900">
            <div className="container mx-auto pt-6 px-4 py-2 flex flex-col md:flex-row justify-between items-center">
                <Logo />
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                        </svg>
                    </button>
                </div>
                <div className={`flex-col md:flex-row md:flex ${isOpen ? 'flex' : 'hidden'} md:items-center space-y-4 md:space-y-0 md:space-x-4 bg-[#2C2C2C] px-6 md:px-14 py-4 md:py-8  sm:rounded-full bg-opacity-80 mb-4 md:mb-0`}>
                    <a href="#about" className="hanken-grotesk-legendary-400 bg-gradient-to-r inline from-[#2670F6] to-[#00F0C5] bg-clip-text text-transparent">About Us</a>
                    <a href="#services" className="text-white hanken-grotesk-legendary-400 hover:text-gray-400">Services</a>
                    <a href="#scope" className="text-white hanken-grotesk-legendary-400 hover:text-gray-400">Our Scope</a>
                    <a href="#team" className="text-white hanken-grotesk-legendary-400 hover:text-gray-400">Team</a>
                    <a href="#contact" className="text-white hanken-grotesk-legendary-400 hover:text-gray-400">Contact Us</a>
                </div>
                <button className="bg-gradient-to-r from-[#2670F6] hanken-grotesk-legendary-500 to-[#00F0C5] text-white px-6 md:px-12 py-2 md:py-4 rounded-xl">Get Started</button>
            </div>
        </nav>
    );
}

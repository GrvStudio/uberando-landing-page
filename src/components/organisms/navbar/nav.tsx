export default function Navbar() {
    return (
        <nav className="bg-gray-900">
            <div className="container mx-auto pt-6 px-4 py-2 flex flex-col md:flex-row justify-between items-center">
                <div className="text-2xl md:text-[42px] font-bold text-white hanken-grotesk-legendary-500 mb-4 md:mb-0">
                    <div className="bg-gradient-to-r inline from-[#2670F6] to-[#00F0C5] bg-clip-text text-transparent">
                        U
                    </div>
                    berando
                </div>
                <div className="space-x-2 md:space-x-4 bg-[#2C2C2C] px-6 md:px-14 py-4 md:py-8 rounded-full bg-opacity-80 mb-4 md:mb-0">
                    <a href="#about" className="text-white hanken-grotesk-legendary-400 bg-gradient-to-r inline from-[#2670F6] to-[#00F0C5] bg-clip-text text-transparent">About Us</a>
                    <a href="#services" className="text-white hanken-grotesk-legendary-400 hover:text-gray-400">Services</a>
                    <a href="#scope" className="text-white hanken-grotesk-legendary-400 hover:text-gray-400">Our Scope</a>
                    <a href="#team" className="text-white hanken-grotesk-legendary-400 hover:text-gray-400">Team</a>
                    <a href="#contact" className="text-white hanken-grotesk-legendary-400 hover:text-gray-400">Contact Us</a>
                </div>
                <button className="bg-gradient-to-r from-[#2670F6] hanken-grotesk-legendary-500 to-[#00F0C5] text-white px-6 md:px-12 py-2 md:py-4 rounded-xl">Get Started</button>
            </div>
        </nav>
    )
}

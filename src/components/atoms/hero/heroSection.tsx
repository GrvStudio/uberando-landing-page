export default function HeroSection() {
    return (
        <header className="bg-gray-900 text-white py-10 md:py-20">
            <div className="container mx-auto px-4 md:w-[80%] 2xl:w-[60%] w-full">
                <h1 className="text-3xl md:text-xl 2xl:text-4xl text-left font-bold mb-4">
                    <span className="text-white block hanken-grotesk-legendary-900 text-[48px] md:text-[133px] mb-8 md:mb-24">Igniting</span>
                    <div className="mb-6 md:mb-11 ml-0 md:ml-36">
                        <span className="bg-gradient-to-r inline from-[#2670F6] to-[#00F0C5] bg-clip-text text-transparent text-right hanken-grotesk-legendary-900 text-[48px] md:text-[133px]">Ideas Inspiring</span>
                    </div>
                    <span className="text-white hanken-grotesk-legendary-900 text-[48px] md:text-[133px]">Innovation.</span>
                </h1>
            </div>
        </header>
    );
}

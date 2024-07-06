const Statistics = () => {
    return (
        <div className="bg-gray-900 text-white py-12 px-6 md:px-12">
            <div className="container mx-auto">
                <div className="bg-[#2c2c2c] text-white py-12 px-6 md:px-12 rounded-lg">
                    <div className="container mx-auto text-center">
                        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-8 w-full md:w-8/12 mx-auto hanken-grotesk-legendary-500">
                            We are a company that specializes in creating a solution for your business problems quickly
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="flex flex-col items-center">
                                <span className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-500 hanken-grotesk-legendary-500">25+</span>
                                <span className="mt-2 text-base hanken-grotesk-legendary-500">Happy clients</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <span className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-500 hanken-grotesk-legendary-500">40+</span>
                                <span className="mt-2 text-base hanken-grotesk-legendary-500">Projects developed</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <span className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-500 hanken-grotesk-legendary-500">225</span>
                                <span className="mt-2 text-base hanken-grotesk-legendary-500">Hours Of Support</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Statistics;

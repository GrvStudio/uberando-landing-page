import React from 'react';

const VisionMission: React.FC = () => {
    return (
        <div className="bg-gray-900 text-white py-12 px-6 md:px-12">
            <div className="flex flex-col md:flex-row md:space-x-12 container mx-auto">
                <div className="flex-1 mb-8 md:mb-0">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 hanken-grotesk-legendary-500">Vision</h2>
                    <p className="hanken-grotesk-legendary-400 text-sm sm:text-base md:text-lg lg:text-xl">
                        Uberando is a leading IT company for Consulting Services and Deployment
                        of best of breed Business Solutions to top tier domestic and international
                        customers.
                    </p>
                </div>
                <div className="flex-1">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 hanken-grotesk-legendary-500">Mission</h2>
                    <p className="hanken-grotesk-legendary-400 text-sm sm:text-base md:text-lg lg:text-xl mb-6">
                        Uberando's mission is to empower businesses with cutting-edge technology
                        solutions that drive growth and efficiency. We deliver value through:
                    </p>
                    <ul className="list-disc space-y-3 pl-5">
                        <li className="text-left">Top-notch IT solutions: Developing and implementing high-quality software, hardware, and consulting services.</li>
                        <li className="text-left">Enhanced security and accessibility: Ensuring information is both secure and easy to access.</li>
                        <li className="text-left">Seamless communication: Facilitating smooth data exchange between businesses.</li>
                        <li className="text-left">Value and growth: Offering cost-effective solutions that provide a strong return on investment.</li>
                        <li className="text-left">Employee development: Providing fulfilling careers and advancement opportunities for our team.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default VisionMission;

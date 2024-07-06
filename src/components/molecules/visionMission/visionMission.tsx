import React from 'react';

const VisionMission: React.FC = () => {
    return (
        <div className="bg-gray-900 text-white py-12 px-6 md:px-12">
            <div className="flex flex-col md:flex-row md:space-x-12 container mx-auto">
                <div className="flex-1 mb-8 md:mb-0">
                    <h2 className="text-[67px] font-bold mb-4 hanken-grotesk-legendary-500">Vision</h2>
                    <p className="hanken-grotesk-legendary-400 text-base sm:text-lg md:text-xl lg:text-[20px]">
                        Uberando is a leading IT company for Consulting Services and Deployment
                        of best of breed Business Solutions to top tier domestic and international
                        customers.
                    </p>
                </div>
                <div className="flex-1">
                    <h2 className="text-[67px] font-bold mb-4 hanken-grotesk-legendary-500">Mission</h2>
                    <p className="hanken-grotesk-legendary-400 text-base sm:text-lg md:text-xl lg:text-[20px] mb-6">
                        Uberando's mission is to empower businesses with cutting-edge technology
                        solutions that drive growth and efficiency. We deliver value through:
                    </p>
                    <ul className="list-disc list-inside space-y-3">
                        <li>Top-notch IT solutions: Developing and implementing high-quality software, hardware, and consulting services.</li>
                        <li>Enhanced security and accessibility: Ensuring information is both secure and easy to access.</li>
                        <li>Seamless communication: Facilitating smooth data exchange between businesses.</li>
                        <li>Value and growth: Offering cost-effective solutions that provide a strong return on investment.</li>
                        <li>Employee development: Providing fulfilling careers and advancement opportunities for our team.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default VisionMission;

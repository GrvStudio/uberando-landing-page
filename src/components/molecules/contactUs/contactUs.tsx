import React from 'react';

const ContactUs: React.FC = () => {
    return (
        <div className="bg-gray-900 text-white py-14 px-6 md:px-12">
            <div className="container mx-auto">
                <div className="bg-gradient-to-r from-[#2670F6] to-[#00F0C5] text-white p-16 rounded-lg flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0 md:w-2/3">
                        <h2 className="text-[50px] font-bold mb-2 hanken-grotesk-legendary-500">Contact Us</h2>
                        <p className="text-base w-8/12 hanken-grotesk-legendary-400">
                            We specialize in custom software development, delivering tailored products, IT services, and comprehensive end-to-end solutions for our enterprise clients.
                        </p>
                    </div>
                    <div className="flex flex-col md:w-1/3">
                        <p className="text-base text-white text-[22px] font-bold mb-4    hanken-grotesk-legendary-400">
                            Get Started
                        </p>
                        <div className="flex w-full">
                            <input
                                type="email"
                                placeholder="Enter email address"
                                className="p-4 text-sm hanken-grotesk-legendary-400 border border-[#21625d] rounded-l-full w-full md:w-auto md:flex-grow bg-[#21625d] text-white placeholder-gray-300"
                            />
                            <button className="bg-white text-sm hanken-grotesk-legendary-400 hover:bg-teal-700 text-gray-500 font-bold py-2 px-4 rounded-r-full">
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;

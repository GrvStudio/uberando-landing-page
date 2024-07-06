import React from 'react';

import Love from "../../../assets/love.svg"

interface Company {
    id: number;
    image: string;
}

interface Props {
    companyList: Company[];
}

const BusinessSolution: React.FC<Props> = ({ companyList }) => {
    return (
        <section className="bg-gray-900 text-white py-6 pt-14">
            <div className="container mx-auto px-4 flex flex-wrap items-start">
                <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
                    <h2 className="text-[67px] font-bold mb-4 hanken-grotesk-legendary-500">Powerful Solution for Your Business</h2>
                    <p className="mb-4 hanken-grotesk-legendary-400 text-[20px]">
                        <b>CV. Uberando</b>, based in Bandung, West Java, Indonesia, specializes in comprehensive software development and engineering services, offering effective near-shore management solutions.
                    </p>
                    <p className='hanken-grotesk-legendary-400 text-[20px]'>
                        With over 12 years of IT experience, we excel in optimizing organizational processes across banking, financial, and trade sectors. Our team is committed to delivering large-scale, integrated solutions, ensuring our clients thrive in today's dynamic business environment with confidence and innovation.
                    </p>
                </div>
                <div className="w-full relative lg:w-1/2 flex flex-wrap justify-center items-center">
                    {companyList.map((company) => (
                        <div key={company.id} className="w-1/2 sm:w-1/3 p-2">
                            <div className="bg-gray-800 p-4 rounded-lg">
                                <img src={company.image} alt="company" />
                            </div>
                        </div>
                    ))}
                    <div className="w-full absolute bottom-0 flex justify-center mt-4">
                        <div className="bg-[#2C2C2C] p-4 rounded-lg flex items-center space-x-4">
                            <div className="scale-75">
                                <Love />
                            </div>
                            <div className="flex flex-col-reverse">
                                <span className="text-2xl font-bold text-white mr-2 hanken-grotesk-legendary-600">650.00+</span>
                                <span className='hanken-grotesk-legendary-500 text-sm bg-gradient-to-r inline from-[#2670F6] to-[#00F0C5] bg-clip-text text-transparent'>User Review</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BusinessSolution;

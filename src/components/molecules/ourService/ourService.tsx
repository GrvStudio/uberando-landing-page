import SectionDefault from 'components/atoms/section/sectionDefault';
import React from 'react';

import Maintenance from "../../../assets/001-maintenance.svg";
import Server from "../../../assets/030-server.svg"
import Launch from "../../../assets/047-launch.svg"

const ourServiceList = [
    {
        id: 1,
        title: 'Government (Local and Central)',
        description: 'We serve clients from government institutions in developing their services to the citizen.',
        icon: Maintenance,
    },
    {
        id: 2,
        title: 'Financial Services (insurance, banking and clearing house)',
        description: 'We have also served from the financial sector such as in the banking sector.',
        icon: Server,
    },
    {
        id: 3,
        title: 'Health Care & Education',
        description: 'We also serve from the health service sector and educational institutions.',
        icon: Launch,
    },
    {
        id: 4,
        title: 'Manufacturing',
        description: 'We already have several clients in manufacturing and have a lot of experience in software development in manufacturing.',
        icon: Maintenance,
    },
    {
        id: 5,
        title: 'HRM & CRM',
        description: 'We serve projects that handle the field of human resources and customer management in your business.',
        icon: Server,
    },
    {
        id: 6,
        title: 'Production Factories',
        description: 'We can also service the production factories sector.',
        icon: Maintenance,
    }
]

const OurServices: React.FC = () => {
    return (
        <div className="bg-gray-900 text-white py-12 px-6 md:px-12">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 hanken-grotesk-legendary-500">Our Services</h2>
                <p className="text-lg mb-8 w-full md:w-8/12 mx-auto hanken-grotesk-legendary-500">
                    Uberando stands out as a leading IT system integration, professional services, and software development firm in Indonesia,
                    specializing in enterprise systems and solutions. As a privately owned company, Uberando excels in IT software design,
                    development, professional services, and hardware deployment and maintenance across various industry verticals.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {ourServiceList.map((service) => (
                        <SectionDefault key={service.id} >
                            <div className="flex-grow">
                                <div className="mb-12">
                                    <service.icon />
                                </div>
                                <h3 className="text-xl md:text-2xl lg:text-[28px] font-bold mb-4 text-left hanken-grotesk-legendary-500">{service.title}</h3>
                                <p className='text-left hanken-grotesk-legendary-400'>{service.description}</p>
                            </div>
                        </SectionDefault>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OurServices;

import React from 'react';

interface SectionProps {
    title: string;
    className?: string;
    children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, className, children }) => {
    return (
        <div className="flex-1 mb-8 md:mb-0 border flex items-center justify-center p-5 rounded-lg border-[#EFEFEF] border-opacity-30">
            <div className='bg-[#2c2c2c] rounded-lg p-5'>
                <h3 className={`text-2xl font-bold mb-4 ${className}`}>{title}</h3>
                <ul className="list-decimal list-inside space-y-2">
                    {children}
                </ul>
            </div>
        </div>
    );
};

export default Section;

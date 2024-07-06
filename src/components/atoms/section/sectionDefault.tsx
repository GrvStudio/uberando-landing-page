import React from 'react';

interface SectionProps {
    children: React.ReactNode;
}

const SectionDefault: React.FC<SectionProps> = ({ children }) => {
    return (
        <div className="flex flex-1 mb-8 md:mb-0 border items-center justify-center p-3 rounded-lg border-[#EFEFEF] border-opacity-30">
            <div className="flex-1 h-full bg-[#2c2c2c] rounded-lg p-5">
                {children}
            </div>
        </div>
    );
};

export default SectionDefault;

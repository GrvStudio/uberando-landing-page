import React from 'react';

interface SectionItemProps {
    children: React.ReactNode;
}

const SectionItem: React.FC<SectionItemProps> = ({ children }) => {
    return (
        <li className="hanken-grotesk-legendary-400">
            {children}
        </li>
    );
};

export default SectionItem;

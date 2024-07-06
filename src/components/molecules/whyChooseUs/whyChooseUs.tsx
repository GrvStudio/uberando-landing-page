import Section from 'components/atoms/section/section';
import SectionItem from 'components/atoms/section/sectionItem';
import React from 'react';

const WhyChooseUs: React.FC = () => {
    return (
        <div className="bg-gray-900 text-white py-12 px-6 md:px-12">
            <div className="container mx-auto">
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 hanken-grotesk-legendary-500">Why Choose Us?</h2>
                <p className="text-lg mb-8 hanken-grotesk-legendary-400 w-full md:w-6/12">
                    Choose Uberando for the best IT solutions, guaranteed security, seamless communication,
                    maximum investment value, and a team of experts ready to support your business success.
                </p>
                <div className="flex flex-col md:flex-row md:space-x-12 items-center">
                    <Section title="Our Strengths:" className="hanken-grotesk-legendary-500">
                        <SectionItem>Focused Expertise: Deep IT knowledge for targeted solutions.</SectionItem>
                        <SectionItem>Maximum ROI: Innovative solutions for real business impact.</SectionItem>
                        <SectionItem>Rapid Response: Swift and efficient problem-solving.</SectionItem>
                        <SectionItem>Results-Driven: Dedicated team committed to achieving goals.</SectionItem>
                        <SectionItem>Creative Thinking: Unique and innovative solutions to your challenges.</SectionItem>
                    </Section>
                    <Section title="Why Choose Us?">
                        <SectionItem>Expert IT Talent: Our team of skilled professionals is ready to tackle your toughest tech challenges.</SectionItem>
                        <SectionItem>Cutting-Edge Technology: We utilize the latest tools and infrastructure for top performance.</SectionItem>
                        <SectionItem>Proven Processes: Our established workflow ensures efficient project delivery.</SectionItem>
                        <SectionItem>Fast Turnaround: We'll get your solutions up and running quickly.</SectionItem>
                        <SectionItem>Continuous Growth: We're committed to constant improvement and exceeding expectations.</SectionItem>
                        <SectionItem>Access to Top Talent: Our prime location gives us access to the best tech minds in the industry.</SectionItem>
                    </Section>
                    <Section title="Our Expertise:">
                        <p className="text-lg mb-4">We specialize in a wide range of technologies to meet your diverse business needs:</p>
                        <SectionItem>Languages: C#, ASP.NET, VB.NET, PHP, Java, VB6, Python, JavaScript, TypeScript, Ruby</SectionItem>
                        <SectionItem>Databases: MYSQL, SQL Server 2007, Oracle, SQLite, PostgreSQL, MongoDB</SectionItem>
                    </Section>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;

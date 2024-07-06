import React from 'react';

const WhyChooseUs: React.FC = () => {
    return (
        <div className="bg-gray-900 text-white py-12 px-6 md:px-12">
            <div className="container mx-auto">
                <h2 className="text-4xl font-bold mb-4 hanken-grotesk-legendary-500 ">Why Choose Us?</h2>
                <p className="text-lg mb-8">
                    Choose Uberando for the best IT solutions, guaranteed security, seamless communication,
                    maximum investment value, and a team of experts ready to support your business success.
                </p>
                <div className="flex flex-col md:flex-row md:space-x-12">
                    <div className="flex-1 mb-8 md:mb-0">
                        <h3 className="text-2xl font-bold mb-4">Our Strengths:</h3>
                        <ul className="list-decimal list-inside space-y-2">
                            <li>Focused Expertise: Deep IT knowledge for targeted solutions.</li>
                            <li>Maximum ROI: Innovative solutions for real business impact.</li>
                            <li>Rapid Response: Swift and efficient problem-solving.</li>
                            <li>Results-Driven: Dedicated team committed to achieving goals.</li>
                            <li>Creative Thinking: Unique and innovative solutions to your challenges.</li>
                        </ul>
                    </div>
                    <div className="flex-1 mb-8 md:mb-0">
                        <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
                        <ul className="list-decimal list-inside space-y-2">
                            <li>Expert IT Talent: Our team of skilled professionals is ready to tackle your toughest tech challenges.</li>
                            <li>Cutting-Edge Technology: We utilize the latest tools and infrastructure for top performance.</li>
                            <li>Proven Processes: Our established workflow ensures efficient project delivery.</li>
                            <li>Fast Turnaround: We'll get your solutions up and running quickly.</li>
                            <li>Continuous Growth: We're committed to constant improvement and exceeding expectations.</li>
                            <li>Access to Top Talent: Our prime location gives us access to the best tech minds in the industry.</li>
                        </ul>
                    </div>
                    <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-4">Our Expertise:</h3>
                        <p className="text-lg mb-4">We specialize in a wide range of technologies to meet your diverse business needs:</p>
                        <ul className="list-decimal list-inside space-y-2">
                            <li>Languages: C#, ASP.NET, VB.NET, PHP, Java, VB6, Python, JavaScript, TypeScript, Ruby</li>
                            <li>Databases: MYSQL, SQL Server 2007, Oracle, SQLite, PostgreSQL, MongoDB</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;

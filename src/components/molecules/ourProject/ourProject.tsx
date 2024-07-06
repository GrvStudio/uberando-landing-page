import SectionDefault from "components/atoms/section/sectionDefault";

const ourProjectList = [
    {
        id: 1,
        img: 'https://via.placeholder.com/450x250',
        title: 'CRM Dashboard for Globze Finance Company',
        desc: "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pronunciation e.",
    },
    {
        id: 2,
        img: 'https://via.placeholder.com/450x250',
        title: 'Connecting Businesses through SaaS Mastery',
        desc: "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pronunciation e.",
    },
    {
        id: 3,
        img: 'https://via.placeholder.com/450x250',
        title: 'Connecting Businesses through SaaS Mastery',
        desc: "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pronunciation e.",
    }
]

const OutProject: React.FC = () => {
    return (
        <div className="bg-gray-900 text-white py-12 px-6 md:px-12">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 hanken-grotesk-legendary-500">
                    Our Latest Project
                </h2>
                <p className="text-lg mb-8 w-full md:w-8/12 mx-auto hanken-grotesk-legendary-500">
                    Introducing our latest project at Uberando
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {ourProjectList.map((service) => (
                        <SectionDefault key={service.id}>
                            <div className="flex-grow">
                                <div className="mb-12">
                                    <img
                                        className="rounded-lg w-full h-auto"
                                        src={service.img}
                                        alt={service.title}
                                    />
                                </div>
                                <h3 className="text-xl md:text-2xl lg:text-[28px] font-bold mb-4 text-left hanken-grotesk-legendary-500">
                                    {service.title}
                                </h3>
                                <p className="text-left text-sm hanken-grotesk-legendary-400">
                                    {service.desc}
                                </p>
                            </div>
                        </SectionDefault>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OutProject;
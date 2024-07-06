import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";

interface TeamMember {
    id: number;
    name: string;
    position: string;
    img: string;
}

const teamMembers: TeamMember[] = [
    { id: 1, name: 'CURTIS-LEWIS', position: 'Head of Finance', img: 'https://i.pravatar.cc/300' },
    { id: 2, name: 'AMANDA', position: 'Business Analyst', img: 'https://i.pravatar.cc/300' },
    { id: 3, name: 'ALEX XIAO', position: 'Lead Software Engineer', img: 'https://i.pravatar.cc/300' },
    { id: 4, name: 'BRADLEY', position: 'Chief Operations Officer', img: 'https://i.pravatar.cc/300' },
    { id: 5, name: 'ALEXA', position: 'Chief Technology Officer', img: 'https://i.pravatar.cc/300' },
].map(item => ({ ...item, img: item.img.concat(`?u=${item.name.split(" ").join("-")}`) }));

const MeetTheTeam: React.FC = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="bg-gray-900 text-white py-12 px-6 md:px-12">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 hanken-grotesk-legendary-400 text-center">
                Meet The Team
            </h2>
            <Slider {...settings}>
                <div>
                    {teamMembers.map((member) => (
                        <div key={member.id} className="p-4">
                            <div className="flex flex-col items-center">
                                <div className="mb-4">
                                    <img className="rounded-full w-32 h-32 md:w-48 md:h-48 lg:w-56 lg:h-56" src={member.img} alt={member.name} />
                                </div>
                                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 truncate-multiline">{member.name}</h3>
                                <p className="hanken-grotesk-legendary-400 bg-gradient-to-r inline from-[#2670F6] to-[#00F0C5] bg-clip-text text-transparent text-sm md:text-base lg:text-lg">{member.position}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Slider>
        </div>
    );
};

export default MeetTheTeam;

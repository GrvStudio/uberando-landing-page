import FrameOne from "../../../assets/Frame_one.svg";
import FrameTwo from "../../../assets/Frame_two.svg";
import FrameThree from "../../../assets/Frame_three.svg";

const companyList = [
    {
        id: 1,
        image: FrameTwo,
    },
    {
        id: 2,
        image: FrameThree,
    },
    {
        id: 3,
        image: FrameOne,
    },
    {
        id: 4,
        image: FrameTwo,
    },
    {
        id: 5,
        image: FrameThree,
    },
]

export default function CompanyCard() {
    return (
        <section className="bg-gray-900 mx-auto text-white py-6">
            <div className="container mx-auto flex flex-wrap items-center justify-between">
                {
                    companyList.map((company) => (
                        <div key={company.id} className="w-full flex items-center justify-center sm:w-1/2 md:w-1/3 lg:w-1/5 px-4 py-2 text-center">
                            <company.image />
                        </div>
                    ))
                }
            </div>
        </section>

    )
}
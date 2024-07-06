import CompanyCard from "components/atoms/card/companyCard";
import EmailForm from "components/atoms/emailForm/emailForm";
import HeroSection from "components/atoms/hero/heroSection";
import BusinessSolution from "components/molecules/businessSolution/businessSolution";
import OurServices from "components/molecules/ourService/ourService";
import Statistics from "components/molecules/statistics/statistics";
import VisionMission from "components/molecules/visionMission/visionMission";
import WhyChooseUs from "components/molecules/whyChooseUs/whyChooseUs";
import Navbar from "components/organisms/navbar/nav";

const companyList = [
  {
    id: 1,
    image: 'https://via.placeholder.com/250'
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/250'
  },
  {
    id: 3,
    image: 'https://via.placeholder.com/250'
  },
  {
    id: 4,
    image: 'https://via.placeholder.com/250'
  },
  {
    id: 5,
    image: 'https://via.placeholder.com/250'
  },
]

function App() {
  return (
    <main>
      <div className="h-screen w-screen">
        {/* Section One */}
        <Navbar />
        <HeroSection />
        <EmailForm />

        {/* Section Two */}
        <CompanyCard />
        <BusinessSolution
          companyList={companyList}
        />
        <VisionMission />

        {/* Section Three */}
        <WhyChooseUs />
        <OurServices />

        {/* Section Four */}
        <Statistics />
      </div>
    </main>
  );
}

export default App;

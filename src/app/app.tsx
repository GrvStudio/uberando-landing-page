import CompanyCard from "components/atoms/card/companyCard";
import EmailForm from "components/atoms/emailForm/emailForm";
import HeroSection from "components/atoms/hero/heroSection";
import Navbar from "components/organisms/navbar/nav";

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
      </div>
    </main>
  );
}

export default App;

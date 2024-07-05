import EmailForm from "components/atoms/emailForm/emailForm";
import HeroSection from "components/atoms/hero/heroSection";
import Navbar from "components/organisms/navbar/nav";

function App() {
  return (
    <main>
      <div className="h-screen w-screen">
        <Navbar />
        <HeroSection />
        <EmailForm />
      </div>
    </main>
  );
}

export default App;

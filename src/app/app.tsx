import EmailForm from "components/atoms/emailForm/emailForm";
import HeroSection from "components/atoms/hero/heroSection";
import Navbar from "components/organisms/navbar/nav";

function App() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <EmailForm />
    </main>
  );
}

export default App;

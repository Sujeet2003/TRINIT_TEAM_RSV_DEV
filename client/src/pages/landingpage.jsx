import Hero from "../components/Hero";
import Desc from "../components/Desc";
import Guide from "../components/Guide";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

export const LandingPage = () => {

  return (
    <div className="bg-purple-200">
      <Hero />
      <Desc />
      <Guide />
      <FAQ />
      <Footer />
    </div>
  );
}

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import BusinessModels from "./components/BusinessModels";
import Audience from "./components/Audience";
import Process from "./components/Process";
import CTASection from "./components/CTASection";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About/>
      <Services/>
      <BusinessModels/>
      <Audience/>
      <Process/>
      <CTASection/>
      <ContactForm/>
      <Footer/>
      
    </>
  );
}

export default App;
import Header from "../components/Header";
import Hero from "../components/Hero";
import Approach from "../components/Approach";
import Services from "../components/Services";
import Work from "../components/Work";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ScrollEffects from "../components/ScrollEffects";

export default function Home() {
  return (
    <>
      <ScrollEffects />
      <Header />
      <main>
        <Hero />
        <Approach />
        <Services />
        <Work />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

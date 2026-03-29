import Hero from "../components/Hero";
import WhyUs from "../components/WhyUs";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import CtaBanner from "../components/CtaBanner";
import Contact from "../components/Contact";

export default function Home() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Hero scrollTo={scrollTo} />
      <WhyUs />
      <Services scrollTo={scrollTo} />
      <Portfolio scrollTo={scrollTo} />
      <About />
      <Testimonials />
      <CtaBanner scrollTo={scrollTo} />
      <Contact />
    </>
  );
}

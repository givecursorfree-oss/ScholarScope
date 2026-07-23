import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import UseCases from "./components/UseCases";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import Names from "./components/Names";
import Install from "./components/Install";
import Footer from "./components/Footer";
import "./styles/global.css";

export default function App() {
  return (
    <div className="page">
      <Header />
      <main>
        <Hero />
        <Features />
        <UseCases />
        <HowItWorks />
        <Testimonials />
        <Names />
        <Install />
      </main>
      <Footer />
    </div>
  );
}

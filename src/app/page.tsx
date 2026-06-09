import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import Highlights from "@/components/sections/Highlights";
import BrandIntro from "@/components/sections/BrandIntro";
import Overview from "@/components/sections/Overview";
import Location from "@/components/sections/Location";
import UnitGuide from "@/components/sections/UnitGuide";
import SalesSchedule from "@/components/sections/SalesSchedule";
import Features from "@/components/sections/Features";
import Community from "@/components/sections/Community";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Highlights />
        <BrandIntro />
        <div id="overview">
          <Overview />
        </div>
        <div id="location">
          <Location />
        </div>
        <div id="units">
          <UnitGuide />
        </div>
        <div id="schedule">
          <SalesSchedule />
        </div>
        <div id="features">
          <Features />
        </div>
        <Community />
        <div id="contact">
          <Contact />
        </div>
      </main>
      <Footer />
      <FloatingContact />
    </>
  );
}

import Hero from "@/components/sections/Hero";
import LogoMarquee from "@/components/sections/LogoMarquee";
import HomeAbout from "@/components/sections/HomeAbout";
import WhyNJTECH from "@/components/sections/WhyNJTECH";
import HomeServices from "@/components/sections/HomeServices";
import HomeRealisations from "@/components/sections/HomeRealisations";
import Clients from "@/components/sections/Clients";
import HomeCta from "@/components/sections/HomeCta";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoMarquee />
      <HomeAbout />
      <WhyNJTECH />
      <HomeServices />
      <HomeRealisations />
      <Clients />
      <HomeCta />
    </>
  );
}

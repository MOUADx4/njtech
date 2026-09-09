import Hero from "@/components/sections/home/Hero";
import LogoMarquee from "@/components/sections/shared/LogoMarquee";
import HomeAbout from "@/components/sections/home/HomeAbout";
import WhyNJTECH from "@/components/sections/home/WhyNJTECH";
import HomeServices from "@/components/sections/home/HomeServices";
import HomeRealisations from "@/components/sections/home/HomeRealisations";
import Clients from "@/components/sections/shared/Clients";
import HomeCta from "@/components/sections/home/HomeCta";

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

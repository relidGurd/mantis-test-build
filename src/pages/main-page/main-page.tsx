"use client";

import RiseUpAnimation from "@/animation/rise-up-animation/rise-up-animation";
import MainForm from "@/components/main-form/main-form";
import AboutUs from "@/sections/about-us/about-us";
import Hero from "@/sections/hero/hero";
import Partners from "@/sections/partners/partners";
import Services from "@/sections/services/services";

const MainPage = () => {
  return (
    <>
      <RiseUpAnimation>
        <Hero />
      </RiseUpAnimation>
      <RiseUpAnimation>
        <Services />
      </RiseUpAnimation>
      <RiseUpAnimation>
        <AboutUs />
      </RiseUpAnimation>
      <RiseUpAnimation>
        <Partners />
      </RiseUpAnimation>

      <RiseUpAnimation>
        <MainForm />
      </RiseUpAnimation>
    </>
  );
};

export default MainPage;

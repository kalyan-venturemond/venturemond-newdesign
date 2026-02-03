import Image from "next/image";
import Hero from "./home/Hero";
import TwoWaysWeWork from "./home/TwoWaysWeWork";
import WhatWeBuildHome from "./home/WhatWeBuildHome";
import HowWeWork from "./home/HowWeWork";
import WhyVenturemondHome from "./home/WhyVenturemondHome";
import WhyChooseVenturemond from "./home/WhyChooseVenturemond";
import FinalCTA from "./home/FinalCTA";

export default function Home() {
  return (
    <div >
      <Hero />
      <TwoWaysWeWork />
      <WhatWeBuildHome />
      <HowWeWork />
      <WhyVenturemondHome />
      <WhyChooseVenturemond />
      <FinalCTA />
    </div>
  );
}

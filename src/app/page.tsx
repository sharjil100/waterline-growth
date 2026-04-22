import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AgencySection from "@/components/AgencySection";
import MarqueeStrip from "@/components/MarqueeStrip";
import WhoThisIsForSection from "@/components/WhoThisIsForSection";
import ProblemSection from "@/components/ProblemSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import PoolShowcaseSection from "@/components/PoolShowcaseSection";
import WhatYouGetSection from "@/components/WhatYouGetSection";
import PricingSection from "@/components/PricingSection";
import WhyDifferentSection from "@/components/WhyDifferentSection";
import ProofSection from "@/components/ProofSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <MarqueeStrip />
      <AgencySection />
      <MarqueeStrip reverse />
      <WhoThisIsForSection />
      <ProblemSection />
      <HowItWorksSection />
      <PoolShowcaseSection />
      <WhatYouGetSection />
      <PricingSection />
      <WhyDifferentSection />
      <ProofSection />
      <FAQSection />
      <FinalCTASection />
      <FooterSection />
    </>
  );
}

import HeroSection from "../components/sections/HeroSection";
import StatsBar from "../components/sections/StatsBar";
import FeaturesSection from "../components/sections/FeaturesSection";
import HowItWorksSection from "../components/sections/HowItWorksSection";
import EmbedDemoSection from "../components/sections/EmbedDemoSection";
import VRToursSection from "../components/sections/VRToursSection";
import AerialSection from "../components/sections/AerialSection";
import IndustriesSection from "../components/sections/IndustriesSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import FAQSection from "../components/sections/FAQSection";
import CTASection from "../components/sections/CTASection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <StatsBar />
      <FeaturesSection />
      <HowItWorksSection />
      <EmbedDemoSection />
      <VRToursSection />
      <AerialSection />
      <IndustriesSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}

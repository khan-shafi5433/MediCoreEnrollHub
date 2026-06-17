import { HeroSection } from "./HeroSection";
import { WhyChooseSection } from "./WhyChooseSection";
import { ExperienceSection } from "./ExperienceSection";
import { TimelineSection } from "./TimelineSection";
import { TrustSection } from "./TrustSection";
import { FAQSection } from "./FAQSection";
import { ContactSection } from "./ContactSection";
import { Footer } from "../Footer";

export function HomePage() {
  return (
    <main>
      <HeroSection />
      <WhyChooseSection />
      <ExperienceSection />
      <TimelineSection />
      <TrustSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

import FeatureSection from "@/Components/FeatureSection";
import HeroSection from "@/Components/HeroSection";
import MusicSchoolTestimonials from "@/Components/TestimonialCards";
import UpcomingWebinars from "@/Components/UpcomingWebinars";
import WhyChooseUs from "@/Components/WhyChooseUs";

export default function Home() {
  return (
    <>
      <main className="bg-slate-900 min-h-screen bg-grid-white/[0.02] antialiased text-white">
        <HeroSection />
        <FeatureSection />
        <WhyChooseUs />
        <MusicSchoolTestimonials />
        <UpcomingWebinars />
      </main>
    </>
  );
}

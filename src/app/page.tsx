import FeatureSection from "@/Components/FeatureSection";
import Footer from "@/Components/Footer";
import HeroSection from "@/Components/HeroSection";
import Instructors from "@/Components/Instructors";
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
        <Instructors />
        <Footer />
      </main>
    </>
  );
}

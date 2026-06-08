import Hero from "@/components/Hero";
import Services from "@/components/Services";
import DoctorPreview from "@/components/DoctorPreview";
import Stats from "@/components/Stats";
import GalleryPreview from "@/components/GalleryPreview";
import QuizSection from "@/components/QuizSection";
import Testimonials from "@/components/Testimonials";
import VirtualTour from "@/components/VirtualTour";
import TechnologyVideo from "@/components/TechnologyVideo";
import FaqPreview from "@/components/FaqPreview";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <DoctorPreview />
      <Stats />
      <GalleryPreview />
      <QuizSection />
      <Testimonials />
      <VirtualTour />
      <TechnologyVideo />
      <FaqPreview />
    </main>
  );
}

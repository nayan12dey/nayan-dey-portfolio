import { Navbar } from '@/components/navigation/Navbar';
import { About } from '@/components/sections/About';
import { ContactSection } from '@/components/sections/ContactSection';
import { Education } from '@/components/sections/Education';
import { FeaturedProjects } from '@/components/sections/FeaturedProjects';
import { Hero } from '@/components/sections/Hero';
import { TechStack } from '@/components/sections/TechStack';
// import { Hero } from '@/components/sections/Hero';
// import { About } from '@/components/sections/About';
// import { TechStack } from '@/components/sections/TechStack';
// import { FeaturedProjects } from '@/components/sections/FeaturedProjects';
// import { ArchitectureGrid } from '@/components/sections/ArchitectureGrid';
// import { ExperienceTimeline } from '@/components/sections/ExperienceTimeline';
// import { Education } from '@/components/sections/Education';
// import { ContactSection } from '@/components/sections/ContactSection';
// import { Footer } from '@/components/sections/Footer';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background text-gray-100 overflow-x-hidden">
      {/* Background Subtle Atmosphere */}
      <div className="fixed inset-0 bg-grid-pattern opacity-40 pointer-events-none z-0" />
      
      <Navbar />
      
      <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28 pt-24 pb-16">
        <Hero />
        <About />
        <TechStack />
        <FeaturedProjects />
        {/* <ArchitectureGrid /> */}
        {/* <ExperienceTimeline /> */}
        <Education />
        <ContactSection />
      </main>

      {/* <Footer /> */}
    </div>
  );
}
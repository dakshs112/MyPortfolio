import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ThreeBackground from '@/components/ThreeBackground';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Index = () => {
  useScrollAnimation();

  return (
    <div className="relative min-h-screen">
      {/* Global 3D background shared across the entire site */}
      <ThreeBackground />
      <div className="fixed inset-0 -z-10 grid-bg opacity-20 pointer-events-none" />
      <div className="fixed inset-0 -z-10 bg-hero-glow pointer-events-none" />

      <Navigation />
      <main className="relative">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

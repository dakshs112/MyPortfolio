import { ArrowRight, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-bg.jpg';

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(32, 36, 57, 0.9), rgba(32, 36, 57, 0.9)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 opacity-40">
        <div className="particle absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full" style={{ animationDelay: '0s' }}></div>
        <div className="particle absolute top-1/3 right-1/3 w-1 h-1 bg-secondary rounded-full" style={{ animationDelay: '1s' }}></div>
        <div className="particle absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-accent rounded-full" style={{ animationDelay: '2s' }}></div>
        <div className="particle absolute top-2/3 right-1/4 w-1 h-1 bg-primary rounded-full" style={{ animationDelay: '3s' }}></div>
        <div className="particle absolute top-1/2 left-1/6 w-1.5 h-1.5 bg-secondary rounded-full" style={{ animationDelay: '4s' }}></div>
        <div className="particle absolute bottom-1/3 right-1/2 w-1 h-1 bg-accent rounded-full" style={{ animationDelay: '5s' }}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-mono font-bold mb-6 text-gradient">
            Daksh Sharma
          </h1>
          
          <div className="text-xl md:text-2xl text-muted-foreground mb-4 font-mono">
            <span className="text-primary">Backend Developer</span> | 
            <span className="text-secondary"> Node.js</span> | 
            <span className="text-accent"> Express</span> | 
            <span className="text-primary"> MongoDB</span>
          </div>
          
          <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Crafting robust, scalable backend solutions with modern technologies. 
            Passionate about clean code, system design, and building APIs that power amazing experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={scrollToContact}
              className="btn-hero group magnetic"
            >
              Contact Me
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              className="magnetic bg-transparent border-primary text-primary hover:bg-primary hover:text-primary-foreground font-mono px-8 py-4 hover:shadow-[var(--glow-primary)] transition-all duration-400"
              onClick={() => window.open('https://daksh-backend-developer.tiiny.site/', '_blank')}
            >
              <Download className="mr-2 w-5 h-5" />
              Download CV
            </Button>
          </div>
        </div>
        
        {/* Enhanced Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer pulse-glow">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center hover:border-secondary transition-colors duration-300">
            <div className="w-1 h-3 bg-primary rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
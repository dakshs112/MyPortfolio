import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="absolute inset-0 bg-hero-glow pointer-events-none" />

      <div className="relative z-10 text-center px-6 max-w-4xl pointer-events-none">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-mono text-sm text-primary mb-4 tracking-widest uppercase"
        >
          {" Backend Engineer"}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-6xl md:text-8xl font-bold tracking-tight mb-6"
        >
          Daksh <span className="text-gradient">Sharma</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          Architecting scalable systems and elegant APIs. I build the invisible engines that power
          modern products.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex items-center justify-center gap-4 pointer-events-auto"
        >
          <a
            href="#projects"
            className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:scale-105 transition-transform animate-pulse-glow"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-full glass hover:bg-card transition-colors"
          >
            Get in touch
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex items-center justify-center gap-5 mt-8 pointer-events-auto"
        >
          {[
            { Icon: Github, href: "https://github.com/dakshs112" },
            { Icon: Linkedin, href: "https://www.linkedin.com/in/dakshsharma112" },
            { Icon: Mail, href: "#contact" },
          ].map(({ Icon, href }, i) => (
            <a
              key={i}
              href={href}
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="social link"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </motion.div>
      </div>

      <motion.a
        href="#about"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground z-10"
        aria-label="scroll down"
      >
        <ArrowDown className="w-5 h-5" />
      </motion.a>
    </section>
  );
};

export default Hero;

import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div className="md:col-span-1">
              <h3 className="text-2xl font-mono font-bold text-gradient mb-4">
                Daksh Sharma
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Backend Developer passionate about building scalable, efficient, 
                and robust server-side solutions.
              </p>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-1">
              <h4 className="text-lg font-mono font-semibold text-foreground mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
                  <li key={item}>
                    <a 
                      href={`#${item.toLowerCase()}`}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 font-mono text-sm"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links */}
            <div className="md:col-span-1">
              <h4 className="text-lg font-mono font-semibold text-foreground mb-4">
                Connect
              </h4>
              <div className="flex space-x-4 mb-4">
                <a
                  href="https://github.com/dakshs112"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-muted/30 hover:bg-muted/50 text-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/dakshsharma112/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-muted/30 hover:bg-muted/50 text-foreground hover:text-secondary transition-all duration-300 hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:dakshs112@gmail.com"
                  className="p-3 rounded-lg bg-muted/30 hover:bg-muted/50 text-foreground hover:text-accent transition-all duration-300 hover:scale-110"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
              <p className="text-sm text-muted-foreground">
                Open to new opportunities and collaborations
              </p>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="pt-8 border-t border-border">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-muted-foreground font-mono mb-4 md:mb-0">
                © {currentYear} Daksh Sharma. All rights reserved.
              </p>
              
              <div className="flex items-center text-sm text-muted-foreground">
                <span className="mr-1">Made with</span>
                <Heart className="w-4 h-4 text-red-500 mx-1" />
                <span className="ml-1">and lots of</span>
                <span className="ml-1 font-mono text-primary">{"{ coffee }"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
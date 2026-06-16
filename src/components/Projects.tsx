import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const handleLinkClick = (url, e) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(url, '_blank');
  };
  const projects = [
    {
      title: "UShort-URL Shortner",
      description: "A distributed URL shortening platform featuring custom domains, analytics, OAuth authentication, RBAC, and real-time click tracking built with FastAPI, MongoDB, Redis, and Docker.",
tech: [
  "React.js",
  "TypeScript",
  "FastAPI",
  "MongoDB",
  "Redis",
  "Docker",
  "JWT",
  "Google OAuth",
  "RBAC",
  "Event-Driven Architecture",
  "Railway",
  "Tailwind CSS"
],
      github: "https://github.com/dakshs112/ushort",
      demo: "https://ushort-nyyly1dse-dakshs112-1029s-projects.vercel.app/"
    },
    {
      title: "NoteForge-Notes Generator ",
      description: "An AI-powered study assistant that generates summaries, quizzes, flashcards, and study plans using LLaMA 3.3 70B, with secure authentication and document management workflows.",
tech: [
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB Atlas",
  "Groq API",
  "LLaMA 3.3 70B",
  "JWT",
  "Bcrypt",
  "REST APIs",
  "MVC Architecture",
  "Tailwind CSS",
  "PDF Export"
],
      github: "https://github.com/dakshs112/NoteForger",
      demo: "https://note-forger-olive.vercel.app/login"
    },
    {
      title: "Task Management API",
      description: "A robust project management API with team collaboration features, task assignments, deadlines, and progress tracking. Includes role-based authentication and permissions.",
      tech: ["Express.js", "MongoDB", "Node.js", "JWT", "Multer"],
      github: "https://github.com/dakshs112/Task-Master",
      demo: "https://taskbuddy-pw7o.onrender.com"
    },
    {
      title: "Weather Data Aggregator",
      description: "A microservice that aggregates weather data from multiple APIs, processes and caches the information, and provides a unified interface for weather queries.",
      tech: ["Node.js", "Redis", "Docker", "REST APIs", "Cron Jobs"],
      github: "https://github.com/dakshs112/weather-aggregator",
      demo: "https://weather-aggregator.onrender.com"
    },
    {
      title: "Authentication Service",
      description: "A secure authentication microservice with OAuth integration, JWT token management, password encryption, and role-based access control for multiple applications.",
      tech: ["Node.js", "Express", "bcrypt", "JWT", "OAuth2"],
      github: "https://github.com/dakshs112/auth-service",
      demo: "https://auth-service.onrender.com"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-mono font-bold text-gradient mb-6">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-secondary to-accent mx-auto mb-4"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Here are some of my recent backend projects that showcase my skills in API development, 
              database design, and system architecture.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="project-card fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                <div className="mb-4">
                  <h3 className="text-xl font-mono font-semibold text-foreground mb-3">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {project.description}
                  </p>
                </div>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-badge text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 mt-auto relative z-10 pointer-events-auto">
                  <button
                    type="button"
                    onClick={(e) => handleLinkClick(project.github, e)}
                    onKeyDown={(e) => e.key === 'Enter' && handleLinkClick(project.github, e)}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium rounded-md bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:shadow-[var(--glow-primary)] active:scale-95 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background pointer-events-auto"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </button>
                  <button
                    type="button"
                    onClick={(e) => handleLinkClick(project.demo, e)}
                    onKeyDown={(e) => e.key === 'Enter' && handleLinkClick(project.demo, e)}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium rounded-md bg-secondary hover:bg-secondary/80 text-secondary-foreground hover:shadow-[var(--glow-secondary)] active:scale-95 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-background pointer-events-auto"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

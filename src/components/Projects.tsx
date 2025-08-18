import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce API",
      description: "A comprehensive RESTful API for an e-commerce platform with user authentication, product management, shopping cart, and order processing. Built with Node.js, Express, and MongoDB.",
      tech: ["Node.js", "Express", "MongoDB", "JWT", "Stripe API"],
      github: "https://github.com",
      demo: "https://api-demo.com"
    },
    {
      title: "Real-time Chat System",
      description: "A scalable real-time messaging application with WebSocket connections, message persistence, and user presence indicators. Features include private messaging and group chats.",
      tech: ["Node.js", "Socket.io", "Redis", "PostgreSQL", "Docker"],
      github: "https://github.com",
      demo: "https://chat-demo.com"
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
      github: "https://github.com",
      demo: "https://weather-demo.com"
    },
    {
      title: "Authentication Service",
      description: "A secure authentication microservice with OAuth integration, JWT token management, password encryption, and role-based access control for multiple applications.",
      tech: ["Node.js", "Express", "bcrypt", "JWT", "OAuth2"],
      github: "https://github.com",
      demo: "https://auth-demo.com"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/10">
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
              <div key={index} className="project-card fade-in">
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

                <div className="flex gap-3 mt-auto">
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="flex-1 bg-transparent border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button 
                    size="sm"
                    className="flex-1 bg-secondary hover:bg-secondary/80"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
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
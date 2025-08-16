import { 
  Code2, 
  Database, 
  Server, 
  Cloud, 
  Shield, 
  GitBranch,
  Terminal,
  Layers
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend Technologies",
      icon: <Server className="w-8 h-8 text-primary" />,
      skills: ["Node.js", "Express.js", "Fastify", "NestJS", "Koa.js"]
    },
    {
      title: "Databases",
      icon: <Database className="w-8 h-8 text-secondary" />,
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "SQLite"]
    },
    {
      title: "Programming Languages",
      icon: <Code2 className="w-8 h-8 text-accent" />,
      skills: ["JavaScript", "TypeScript", "Python", "Go", "Bash"]
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="w-8 h-8 text-primary" />,
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Nginx"]
    },
    {
      title: "Authentication & Security",
      icon: <Shield className="w-8 h-8 text-secondary" />,
      skills: ["JWT", "OAuth2", "bcrypt", "Passport.js", "CORS"]
    },
    {
      title: "Tools & Version Control",
      icon: <GitBranch className="w-8 h-8 text-accent" />,
      skills: ["Git", "GitHub", "GitLab", "Postman", "VS Code"]
    },
    {
      title: "API Development",
      icon: <Layers className="w-8 h-8 text-primary" />,
      skills: ["REST APIs", "GraphQL", "WebSockets", "Swagger", "API Gateway"]
    },
    {
      title: "Testing & Monitoring",
      icon: <Terminal className="w-8 h-8 text-secondary" />,
      skills: ["Jest", "Mocha", "Chai", "Prometheus", "ELK Stack"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-muted/10 to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-mono font-bold text-gradient mb-6">
              Technical Skills
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-accent to-primary mx-auto mb-4"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise across different areas of backend development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <div key={index} className="card-glow fade-in">
                <div className="flex items-center mb-4">
                  <div className="mr-3">
                    {category.icon}
                  </div>
                  <h3 className="font-mono font-semibold text-lg text-foreground">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="flex items-center justify-between p-2 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors duration-200"
                    >
                      <span className="text-sm font-mono text-foreground/90">
                        {skill}
                      </span>
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center fade-in">
            <div className="bg-card border border-border rounded-xl p-8 max-w-3xl mx-auto">
              <h3 className="text-2xl font-mono font-bold text-gradient mb-4">
                Always Learning
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                The tech landscape is constantly evolving, and I'm passionate about staying updated with the latest 
                technologies and best practices. Currently exploring microservices architecture, serverless computing, 
                and advanced system design patterns.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
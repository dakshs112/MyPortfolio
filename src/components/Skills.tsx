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
      title: "AI Engineering",
      icon: <Code2 className="w-8 h-8 text-primary" />,
      skills: [
      "LLM Applications",
      "Retrieval-Augmented Generation (RAG)",
      "Prompt Engineering",
      "Data Ingestion Pipelines",
      "Vector Embeddings",
      "AI Workflows",
      "FastAPI",
      "REST APIs"
    ]
  },
  {
    title: "Frontend Development",
    icon: <Layers className="w-8 h-8 text-accent" />,
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML5",
      "CSS3"
    ]
  },
  {
    title: "Backend Development",
    icon: <Server className="w-8 h-8 text-primary" />,
    skills: [
      "Node.js",
      "Express.js",
      "Fastify",
      "NestJS",
      "REST APIs",
      "GraphQL",
      "WebSockets"
    ]
  },
  {
    title: "Databases",
    icon: <Database className="w-8 h-8 text-secondary" />,
    skills: [
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "Redis"
    ]
  },
  {
    title: "Programming Languages",
    icon: <Terminal className="w-8 h-8 text-accent" />,
    skills: [
      "Python",
      "JavaScript",
      "C++"
    ]
  },
  {
    title: "Cloud & Deployment",
    icon: <Cloud className="w-8 h-8 text-primary" />,
    skills: [
      "Docker",
      "Vercel",
      "Render",
      "Railway",
      "Netlify"
    ]
  },
  {
    title: "Authentication & Security",
    icon: <Shield className="w-8 h-8 text-secondary" />,
    skills: [
      "JWT",
      "OAuth2",
      "Passport.js",
      "bcrypt",
      "CORS"
    ]
  },
  {
    title: "Developer Tools",
    icon: <GitBranch className="w-8 h-8 text-accent" />,
    skills: [
      "Git",
      "GitHub",
      "Postman",
      "Swagger",
      "VS Code"
    ]
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
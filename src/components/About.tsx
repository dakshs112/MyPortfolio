import { Code, Database, Server, Zap } from 'lucide-react';

const About = () => {
  const skills = [
    'Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'MySQL',
    'REST APIs', 'GraphQL', 'Authentication', 'JWT', 'Redis',
    'Docker', 'AWS', 'System Design', 'Microservices', 'Git'
  ];

  const highlights = [
    {
      icon: <Code className="w-8 h-8 text-primary" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and well-documented code"
    },
    {
      icon: <Database className="w-8 h-8 text-secondary" />,
      title: "Database Design",
      description: "Designing efficient database schemas and optimizing queries"
    },
    {
      icon: <Server className="w-8 h-8 text-accent" />,
      title: "API Development",
      description: "Building robust RESTful and GraphQL APIs"
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Performance",
      description: "Optimizing application performance and scalability"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-mono font-bold text-gradient mb-6">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <p className="text-lg leading-relaxed text-foreground/90 mb-6">
                I am a Full Stack Developer with a strong focus on backend engineering, scalable system design, and modern web application development. Currently pursuing a Bachelor's degree in Information Technology, I specialize in building secure, high-performance applications using JavaScript, Node.js, Express.js, MongoDB, SQL, and RESTful APIs. My experience includes designing database schemas, implementing authentication and authorization mechanisms, developing server-side architectures, integrating third-party services, and optimizing application performance. I am passionate about writing clean, maintainable code and applying software engineering best practices to deliver reliable and efficient solutions.
              </p>
              
              <p className="text-lg leading-relaxed text-foreground/90 mb-8">
                My technical interests extend beyond application development into areas such as system architecture, database optimization, API design, caching strategies, cloud deployment, containerization, and distributed systems. Through hands-on projects, I have gained practical experience with Git, Docker, Linux environments, CI/CD workflows, responsive frontend development, and modern development tools. I continuously explore concepts such as microservices, scalability, security, performance optimization, and software design patterns to deepen my understanding of building production-ready applications. My goal is to leverage strong engineering fundamentals and modern technologies to develop impactful software solutions that solve real-world problems at scale.
              </p>

              <div className="mb-8">
                <h3 className="text-xl font-mono font-semibold text-primary mb-4">
                  Technical Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <span key={index} className="tech-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 fade-in">
              {highlights.map((highlight, index) => (
                <div key={index} className="card-glow text-center">
                  <div className="flex justify-center mb-4">
                    {highlight.icon}
                  </div>
                  <h4 className="font-mono font-semibold text-lg mb-2 text-foreground">
                    {highlight.title}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
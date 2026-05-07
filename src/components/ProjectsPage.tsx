import { motion } from 'motion/react';
import { ExternalLink, Github, Code, Server, Database, Globe } from 'lucide-react';
import Navigation from './Navigation';
import Logos from './Logos';

export default function ProjectsPage() {
  const projects = [
    {
      title: 'Cloud Infrastructure Pipeline',
      description: 'Automated CI/CD pipeline using GitHub Actions, Docker, and AWS EC2 to deploy scalable web applications.',
      icon: Server,
      tech: ['AWS', 'Docker', 'GitHub Actions', 'Linux'],
      githubLink: '#',
      liveLink: '#',
    },
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio built with React, Tailwind CSS, and Framer Motion, featuring dark mode and fluid animations.',
      icon: Globe,
      tech: ['React', 'Tailwind', 'Framer Motion', 'Vite'],
      githubLink: '#',
      liveLink: '#',
    },
    {
      title: 'Database Migration Script',
      description: 'A robust Python script for migrating large datasets between PostgreSQL databases with zero downtime.',
      icon: Database,
      tech: ['Python', 'PostgreSQL', 'SQLAlchemy'],
      githubLink: '#',
      liveLink: '#',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      className="min-h-screen relative overflow-hidden text-foreground" style={{ maxWidth: '1668px', margin: '0 auto' }}
    >
      <div className="relative z-20">
        <Logos />
        <Navigation />
      </div>

      <div className="relative z-10 px-4 md:px-8 lg:px-12 pb-12 pt-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 100, damping: 15 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-5xl mb-3 font-bold text-primary">
            Projects Showcase
          </h1>
          <p className="text-lg max-w-3xl mx-auto text-primary">
            A collection of my recent work, experiments, and technical deep-dives.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ type: 'spring', stiffness: 100, damping: 15, delay: index * 0.1 }}
              >
                <motion.div
                  whileHover={{ y: -8 }}
                  className="rounded-3xl p-6 md:p-8 shadow-xl h-full flex flex-col justify-between bg-card transition-all duration-300 border border-border/50 hover:shadow-2xl hover:border-primary/30"
                >
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-md bg-primary">
                        <Icon className="w-7 h-7 text-primary-foreground" />
                      </div>
                      <div className="flex gap-3">
                        <a href={project.githubLink} className="p-2 rounded-full bg-secondary text-primary hover:bg-primary hover:text-primary-foreground transition-colors" aria-label="GitHub Repository">
                          <Github className="w-5 h-5" />
                        </a>
                        <a href={project.liveLink} className="p-2 rounded-full bg-secondary text-primary hover:bg-primary hover:text-primary-foreground transition-colors" aria-label="Live Project">
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 text-primary">{project.title}</h3>
                    <p className="text-primary/80 mb-6 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-secondary text-primary border border-primary/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 100, damping: 15, delay: 0.4 }}
          className="mt-12 rounded-3xl p-8 md:p-12 shadow-xl text-center max-w-4xl mx-auto bg-muted"
        >
          <Code className="w-12 h-12 mx-auto mb-4 text-primary-foreground opacity-80" />
          <h2 className="text-2xl font-bold mb-3 text-primary-foreground">Check out more on GitHub</h2>
          <p className="text-lg mb-6 text-primary-foreground/90">
            I'm constantly building and learning new things. Visit my GitHub profile to see my latest commits and open-source contributions.
          </p>
          <a 
            href="#" 
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-bold bg-background text-foreground hover:scale-105 transition-transform"
          >
            <Github className="w-5 h-5" />
            View GitHub Profile
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
}

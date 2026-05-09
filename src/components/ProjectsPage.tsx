import { motion } from 'motion/react';
import { ExternalLink, Github, Code, Server, Globe, Award } from 'lucide-react';
import Navigation from './Navigation';
import Logos from './Logos';

export default function ProjectsPage() {
  const projects = [
    {
      title: 'MultiETools',
      description: 'A versatile web platform offering a collection of everyday utilities — from text tools and image converters to calculators — all in one place.',
      icon: Globe,
      tech: ['HTML', 'CSS', 'JavaScript'],
      githubLink: 'https://github.com/ranjit-15/multietools',
      liveLink: 'https://hive.page.gd/login',
    },
    {
      title: 'NexusAI',
      description: 'An AI-powered web application built with React and Firebase, providing intelligent conversational capabilities with real-time data syncing.',
      icon: Server,
      tech: ['React', 'Firebase', 'Vite', 'TypeScript'],
      githubLink: 'https://github.com/ranjit-15/NexusAI',
      liveLink: 'https://nexusais.dev',
    },
    {
      title: 'Portfolio Website',
      description: 'This very site! A modern, responsive portfolio built with React, Tailwind CSS v4, and Framer Motion, featuring dark mode and fluid page transitions.',
      icon: Code,
      tech: ['React', 'Tailwind', 'Framer Motion', 'Vite'],
      githubLink: 'https://github.com/ranjit-15/Portfolio',
      liveLink: 'https://ranjityadav.com.np',
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
                        {project.githubLink !== '#' && (
                          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-secondary text-primary hover:bg-primary hover:text-primary-foreground transition-colors" aria-label="GitHub Repository">
                            <Github className="w-5 h-5" />
                          </a>
                        )}
                        {project.liveLink !== '#' && (
                          <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-secondary text-primary hover:bg-primary hover:text-primary-foreground transition-colors" aria-label="Live Project">
                            <ExternalLink className="w-5 h-5" />
                          </a>
                        )}
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

        {/* Certificates Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 100, damping: 15, delay: 0.2 }}
          className="mt-16 max-w-7xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-8 flex items-center justify-center gap-3">
            <Award className="w-8 h-8" />
            Certificates & Achievements
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                title: 'Python Essentials 1',
                issuer: 'Cisco / OpenEDG Python Institute',
                date: '2024',
                description: 'Verified knowledge of computer programming concepts, Python syntax and semantics, and the ability to accomplish coding tasks using the Python Standard Library.',
                badgeId: '2f3d8f93-a01d-42cd-aa20-53f5c2081d4f',
                credlyUrl: 'https://www.credly.com/badges/2f3d8f93-a01d-42cd-aa20-53f5c2081d4f/public_url',
              },
              {
                title: 'Python Essentials 2',
                issuer: 'Cisco / OpenEDG Python Institute',
                date: '2024',
                description: 'Verified intermediate Python skills including modules, packages, exceptions, file processing, OOP, and prepares for the PCAP – Certified Associate in Python Programming.',
                badgeId: '8311892d-dd35-465d-a15c-d02a815383aa',
                credlyUrl: 'https://www.credly.com/badges/8311892d-dd35-465d-a15c-d02a815383aa/public_url',
              },
            ].map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 100, damping: 15, delay: index * 0.15 }}
                whileHover={{ y: -4 }}
                className="rounded-3xl p-6 md:p-8 shadow-xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-2xl transition-all duration-300 flex flex-col sm:flex-row gap-6 items-start"
              >
                {/* Credly Badge */}
                <div className="flex-shrink-0 flex items-center justify-center">
                  <div
                    data-iframe-width="120"
                    data-iframe-height="210"
                    data-share-badge-id={cert.badgeId}
                    data-share-badge-host="https://www.credly.com"
                  />
                </div>
                {/* Info */}
                <div className="flex-1">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center bg-primary shadow-md">
                      <Award className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-primary">{cert.title}</h3>
                      <p className="text-sm font-medium text-primary/70">{cert.issuer} · {cert.date}</p>
                    </div>
                  </div>
                  <p className="text-sm text-primary/70 leading-relaxed mb-4">{cert.description}</p>
                  <a
                    href={cert.credlyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-primary text-primary-foreground hover:scale-105 transition-transform shadow-sm"
                  >
                    <Award className="w-4 h-4" />
                    Verify on Credly
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>


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
            href="https://github.com/ranjit-15" 
            target="_blank"
            rel="noopener noreferrer"
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

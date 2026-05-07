import { motion } from 'motion/react';
import { Brain, Eye, Compass, Github, Linkedin, Instagram, Mail, FileText, type LucideIcon } from 'lucide-react';
import Navigation from './Navigation';

import Logos from './Logos';
import portraitImage from '../assets/profile.png';

interface SocialLink {
  icon: LucideIcon;
  href: string;
  label: string;
}

interface Trait {
  icon: LucideIcon;
  label: string;
}

export default function AboutMePage() {
  const socialLinks: SocialLink[] = [
    { icon: Github, href: 'https://github.com/ranjit-15', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/ranjit-yadav-2ab635200', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/ranjit_0__', label: 'Instagram' },
    { icon: Mail, href: 'mailto:ranjityadav982577rd@gmail.com', label: 'Email' },
  ];

  const traits: Trait[] = [
    { icon: Brain, label: 'Thinker' },
    { icon: Eye, label: 'Observer' },
    { icon: Compass, label: 'Explorer' },
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

      <div className="relative z-10 px-4 md:px-8 lg:px-12 py-8">
        {/* Page Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 100, damping: 15 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-primary">
            About Me
          </h1>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.1 }}
          className="bg-card rounded-3xl shadow-2xl overflow-hidden mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
            {/* Image Section */}
            <div className="md:col-span-2 relative p-8 md:p-12 flex flex-col items-center justify-center bg-secondary gap-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative"
              >
                <motion.div
                  animate={{
                    y: [0, -15, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-64 h-80 md:w-80 md:h-96 rounded-3xl overflow-hidden shadow-2xl"
                >
                  <img
                    src={portraitImage}
                    alt="Ranjit Yadav"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-tr-full pointer-events-none"></div>
              </motion.div>
              <a
                href="/Ranjit.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold bg-primary text-primary-foreground hover:scale-105 transition-transform shadow-md"
              >
                <FileText className="w-5 h-5" />
                Download Resume
              </a>
            </div>

            {/* Text Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="md:col-span-3 p-6 sm:p-10 flex flex-col justify-center bg-card"
            >
              <h2 className="text-2xl md:text-3xl mb-6 font-bold text-primary">
                Hi, I'm Ranjit Yadav! 👋
              </h2>
              <div className="space-y-4 leading-relaxed text-primary mb-8">
                <p>
                  I'm a simple guy and an IT student passionate about creating things.
                </p>
                <p>
                  I enjoy exploring new tech and figuring out how things work.
                </p>
                <p>
                  I'm someone who loves observing the world quietly — I think a lot, learn at my own pace, and grow through my experiences.
                </p>
                <p>
                  Even though I'm still exploring my strengths and weaknesses, I'm proud of the progress I'm making every day.
                </p>
                <p>
                  I may look reserved at first, but once I get comfortable, I enjoy joking around, sharing stories, and listening to others.
                </p>
                <p>
                  Being passionate about technology taught me independence early, but it also taught me how important connections are.
                </p>
                <p>
                  Right now, I'm still learning who I am, what I'm capable of, and what path I really want to take in life — and that journey excites me.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Personality Traits */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {traits.map((trait) => {
            const Icon = trait.icon;
            return (
              <motion.div
                key={trait.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 100, damping: 15, delay: traits.indexOf(trait) * 0.1 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow bg-secondary"
                >
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 shadow-md bg-primary">
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <p className="font-medium text-primary">{trait.label}</p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

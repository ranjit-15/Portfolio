import { motion } from 'motion/react';
import { Brain, Eye, Compass, Github, Linkedin, Instagram, Mail, type LucideIcon } from 'lucide-react';
import Navigation from './Navigation';
import FloatingShapes from './FloatingShapes';
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
    <div className="min-h-screen relative overflow-hidden" style={{ maxWidth: '1668px', margin: '0 auto', backgroundColor: '#FFF8EC' }}>
      <FloatingShapes />
      <div className="relative z-20">
        <Logos />
        <Navigation />
      </div>

      <div className="relative z-10 px-12 py-8">
        {/* Page Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1 className="text-5xl" style={{ color: '#546B41' }}>
            About Me
          </h1>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-8"
        >
          <div className="grid md:grid-cols-5 gap-0">
            {/* Image Section */}
            <div className="md:col-span-2 relative p-12 flex items-center justify-center" style={{ backgroundColor: '#DCCCAC' }}>
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
                  className="w-80 h-96 rounded-3xl overflow-hidden shadow-2xl"
                >
                  <img
                    src={portraitImage}
                    alt="Ranjit Yadav"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full opacity-60" style={{ backgroundColor: '#99AD7A' }}></div>
                <div className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full opacity-60" style={{ backgroundColor: '#546B41' }}></div>
              </motion.div>
            </div>

            {/* Text Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="md:col-span-3 p-10 flex flex-col justify-center"
            >
              <div className="space-y-4 leading-relaxed" style={{ color: '#546B41' }}>
                <p>
                  Hi! I'm <span className="font-bold">Ranjit Yadav</span>.
                </p>
                <p>
                  I'm a simple guy and an IT student passionate about creating things.
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
        <div className="grid grid-cols-3 gap-6 max-w-4xl mx-auto">
          {traits.map((trait) => {
            const Icon = trait.icon;
            return (
              <motion.div
                key={trait.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + traits.indexOf(trait) * 0.1 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                  style={{ backgroundColor: '#DCCCAC' }}
                >
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 shadow-md" style={{ backgroundColor: '#546B41' }}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <p className="font-medium" style={{ color: '#546B41' }}>{trait.label}</p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Sticky Social Bar */}
      <div className="sticky bottom-0 left-0 right-0 z-30 flex justify-center py-4 bg-[#FFF8EC]/80 backdrop-blur-md border-t border-[#DCCCAC]">
        <div className="flex items-center gap-2">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-full transition-colors duration-300 text-[#546B41] hover:bg-[#DCCCAC]/50"
              >
                <Icon size={24} strokeWidth={2} />
              </motion.a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

import { motion } from 'motion/react';
import { User, Heart, Target, Briefcase, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import Logos from './Logos';
import portraitImage from '../assets/profile.png';

export default function LandingPage() {
  const cards = [
    {
      title: 'About Me',
      description: 'Get to know who I am and the journey I\'m currently exploring.',
      icon: User,
      path: '/about',
    },
    {
      title: 'Things I Love',
      description: 'My hobbies, favorites, and what keeps me motivated.',
      icon: Heart,
      path: '/interests',
    },

    {
      title: 'Projects',
      description: 'Check out my hands-on technical projects.',
      icon: Briefcase,
      path: '/projects',
    },
    {
      title: 'Future Goals',
      description: 'What I aim to achieve in the coming years.',
      icon: Target,
      path: '/goals',
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

      {/* Header with Logos */}
      <div className="relative z-20">
        <Logos />
        <Navigation />
      </div>

      <div className="relative z-10 px-4 md:px-8 lg:px-12 pb-12">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 100, damping: 15 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl md:text-5xl mb-3 font-bold text-primary">
            Welcome!
          </h1>
          <p className="text-base md:text-lg text-primary">
            Take a quick look at who I am and what I'm passionate about.
          </p>
        </motion.div>

        {/* Character Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center justify-center mb-12 gap-8"
        >
          <motion.div
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-64 h-64 rounded-full overflow-hidden bg-gray-200 shadow-2xl"
          >
            <img
              src={portraitImage}
              alt="Ranjit Yadav"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <a
            href="/Ranjit.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold bg-primary text-primary-foreground hover:scale-105 transition-transform shadow-lg"
          >
            <FileText className="w-5 h-5" />
            Download Resume
          </a>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 max-w-5xl mx-auto mb-8">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ type: 'spring', stiffness: 100, damping: 15, delay: index * 0.1 }}
                  key={index}
                >
                <Link to={card.path}>
                  <motion.div
                    whileHover={{ scale: 1.03, y: -5 }}
                    whileTap={{ scale: 0.98 }}
                    className="rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer h-full bg-secondary"
                  >
                    <div className="flex flex-col items-center text-center gap-4">
                      <div className="w-16 h-16 rounded-full flex items-center justify-center shadow-md bg-background">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <div>
                        <h3 className="mb-2 text-primary font-bold">
                          {card.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-primary">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            );
          })}
        </div>


      </div>
    </motion.div>
  );
}

import { motion } from 'motion/react';
import { User, Heart, BookOpen, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import FloatingShapes from './FloatingShapes';
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
      title: 'University Experience',
      description: 'A glimpse of my life as a BSIT freshman at UNO-R.',
      icon: BookOpen,
      path: '/freshman',
    },
    {
      title: 'Future Goals',
      description: 'What I aim to achieve in the coming years.',
      icon: Target,
      path: '/goals',
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden" style={{ maxWidth: '1668px', margin: '0 auto', backgroundColor: '#FFF8EC' }}>
      <FloatingShapes />

      {/* Header with Logos */}
      <div className="relative z-20">
        <Logos />
        <Navigation />
      </div>

      <div className="relative z-10 px-12 pb-12">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1 className="text-5xl mb-3" style={{ color: '#546B41' }}>
            Welcome!
          </h1>
          <p className="text-lg" style={{ color: '#546B41' }}>
            Take a quick look at who I am and what I'm passionate about.
          </p>
        </motion.div>

        {/* Character Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center mb-12"
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
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-2 gap-8 max-w-5xl mx-auto mb-8">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                <Link to={card.path}>
                  <motion.div
                    whileHover={{ scale: 1.03, y: -5 }}
                    whileTap={{ scale: 0.98 }}
                    className="rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer h-full"
                    style={{ backgroundColor: '#DCCCAC' }}
                  >
                    <div className="flex flex-col items-center text-center gap-4">
                      <div className="w-16 h-16 rounded-full flex items-center justify-center shadow-md" style={{ backgroundColor: '#FFF8EC' }}>
                        <Icon className="w-8 h-8" style={{ color: '#546B41' }} />
                      </div>
                      <div>
                        <h3 className="mb-2" style={{ color: '#546B41' }}>
                          {card.title}
                        </h3>
                        <p className="text-sm leading-relaxed" style={{ color: '#546B41' }}>
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

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="rounded-2xl py-4 text-center mt-8"
          style={{ backgroundColor: '#99AD7A' }}
        >
          <p className="text-sm font-medium" style={{ color: '#FFF8EC' }}>
            Ranjit Yadav: spreading Love❤️
          </p>
        </motion.div>
      </div>
    </div>
  );
}

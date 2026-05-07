import { motion } from 'motion/react';
import { Music, Goal, BookOpen, Film, Gamepad2, Palette, Cpu, Users } from 'lucide-react';
import Navigation from './Navigation';

import Logos from './Logos';
import portraitImage from '../assets/profile.png';

export default function InterestsPage() {
  const interests = [
    {
      title: 'Music',
      description: 'I love listening to music because it helps me relax, focus, and feel inspired. Whether it\'s chill, R&B, pop, or anime soundtracks, music always lifts my mood.',
      icon: Music,
    },
    {
      title: 'Football',
      description: 'Football is my favorite sport. I love the energy, teamwork, and strategy involved on the pitch. It keeps me active and helps me bond with friends.',
      icon: Goal,
    },
    {
      title: 'Reading Manga',
      description: 'I like reading manga during my free time because the stories and art styles are unique. It helps me unwind and escape into different worlds.',
      icon: BookOpen,
    },
    {
      title: 'Movies & Anime',
      description: 'I enjoy watching anime and movies — especially the ones with adventure, fantasy, action, or emotional stories. They inspire me creatively.',
      icon: Film,
    },
    {
      title: 'Online Games',
      description: 'Online games are one of my main hobbies. They entertain me, challenge me, and help me connect with other people.',
      icon: Gamepad2,
    },
    {
      title: 'Creativity',
      description: 'Exploring creative ideas through design, art, and digital media.',
      icon: Palette,
    },
    {
      title: 'Tech Curiosity',
      description: 'Always curious about new technology, coding, and how things work.',
      icon: Cpu,
    },
    {
      title: 'Social Fun',
      description: 'Spending quality time with friends and making memorable moments together.',
      icon: Users,
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

      <div className="relative z-10 px-4 md:px-8 lg:px-12 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 100, damping: 15 }}
          className="text-center mb-6"
        >
          <h1 className="text-3xl md:text-5xl mb-3 font-bold text-primary">
            Things I Love
          </h1>
          <p className="text-lg max-w-3xl mx-auto text-primary">
            A glimpse into the hobbies and interests that keep me energized and inspired.
          </p>
        </motion.div>

        {/* Character Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center md:justify-end mb-6 md:mr-12"
        >
          <motion.div
            animate={{
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-xl"
          >
            <img
              src={portraitImage}
              alt="Ranjit Yadav"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>

        {/* Interests Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
          {interests.map((interest, index) => {
            const Icon = interest.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ type: 'spring', stiffness: 100, damping: 15, delay: index * 0.08 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -8 }}
                  className="rounded-3xl p-6 shadow-xl h-full flex flex-col justify-between cursor-pointer transition-all duration-300 bg-secondary"
                >
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-md bg-primary">
                        <Icon className="w-8 h-8 text-primary-foreground" />
                      </div>
                    </div>
                    <h3 className="mb-2 font-bold text-primary">{interest.title}</h3>
                    <p className="text-xs leading-relaxed text-primary">{interest.description}</p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 100, damping: 15 }}
          className="rounded-3xl p-6 md:p-8 shadow-xl text-center max-w-4xl mx-auto bg-secondary"
        >
          <p className="text-lg italic text-primary">
            "Your passions are a window into your soul."
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}

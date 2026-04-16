import { motion } from 'motion/react';
import { Music, Dumbbell, BookOpen, Film, Gamepad2, Palette, Cpu, Users } from 'lucide-react';
import Navigation from './Navigation';
import FloatingShapes from './FloatingShapes';
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
      title: 'Sports – Badminton',
      description: 'Badminton is my favorite sport. I enjoy the quick movements, the energy, and how it keeps me active. It\'s also one way I bond with friends.',
      icon: Dumbbell,
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
    <div className="min-h-screen relative overflow-hidden" style={{ maxWidth: '1668px', margin: '0 auto', backgroundColor: '#FFF8EC' }}>
      <FloatingShapes />
      <div className="relative z-20">
        <Logos />
        <Navigation />
      </div>

      <div className="relative z-10 px-12 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <h1 className="text-5xl mb-3" style={{ color: '#546B41' }}>
            Things I Love
          </h1>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: '#546B41' }}>
            Here are some of my favorite hobbies and interests that make me who I am.
          </p>
        </motion.div>

        {/* Character Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-end mb-6 mr-12"
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
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {interests.map((interest, index) => {
            const Icon = interest.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.08 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -8 }}
                  whileTap={{ scale: 0.98 }}
                  className={`rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer h-full`}
                  style={{ backgroundColor: '#DCCCAC' }}
                >
                  <div className="flex flex-col items-center text-center">
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 0.5 }}
                      className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-md mb-4`}
                      style={{ backgroundColor: '#546B41' }}
                    >
                      <Icon className="w-8 h-8" style={{ color: '#FFF8EC' }} />
                    </motion.div>
                    <h3 className="mb-2 font-medium" style={{ color: '#546B41' }}>{interest.title}</h3>
                    <p className="text-xs leading-relaxed" style={{ color: '#546B41' }}>{interest.description}</p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="rounded-3xl p-8 shadow-xl text-center max-w-4xl mx-auto"
          style={{ backgroundColor: '#DCCCAC' }}
        >
          <p className="text-lg italic" style={{ color: '#546B41' }}>
            "These interests help me relax, have fun, and connect with others who share the same passions."
          </p>
        </motion.div>
      </div>
    </div>
  );
}

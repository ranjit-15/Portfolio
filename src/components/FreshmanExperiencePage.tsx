import { motion } from 'motion/react';
import { Users, Star, Heart, Sparkles, MessageCircle, Award } from 'lucide-react';
import Navigation from './Navigation';
import FloatingShapes from './FloatingShapes';
import Logos from './Logos';
import groupPhoto from '../assets/group.png';

export default function FreshmanExperiencePage() {
  const highlights = [
    { icon: Users, label: 'New Friends' },
    { icon: Star, label: 'New Experiences' },
    { icon: Heart, label: 'Independence' },
    { icon: Sparkles, label: 'Self-Discovery' },
    { icon: MessageCircle, label: 'Communication' },
    { icon: Award, label: 'Achievement' },
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
          className="text-center mb-8"
        >
          <h1 className="text-5xl mb-3" style={{ color: '#546B41' }}>
            My College Experience
          </h1>
          <p className="text-lg" style={{ color: '#546B41' }}>
            A journey of growth, friendship, and discovery
          </p>
        </motion.div>

        {/* Hero Section with Group Photo */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-8"
        >
          {/* Group Photo Section */}
          <div className="relative h-96">
            <motion.div
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="h-full"
            >
              <img
                src={groupPhoto}
                alt="Friends and Memories"
                className="w-full h-full object-cover"
              />
              {/* Decorative overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="text-white text-3xl drop-shadow-lg"
                 
                >
                  Precious Memories with Friends
                </motion.h2>
              </div>
            </motion.div>
          </div>

          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="p-10"
          >
            <div className="space-y-5 leading-relaxed max-w-5xl mx-auto" style={{ color: '#546B41' }}>
              <p>
                My time in college has been a mix of excitement, nervousness, and new beginnings.
              </p>
              <p>
                Walking into the campus felt surreal — taking my big step toward my career in IT.
              </p>
              <p>
                I met new friends who supported me, laughed with me, and helped me adjust to the environment.
              </p>
              <p>
                At first, I was shy and unsure, but slowly I became more confident.
              </p>
              <p>
                Being a student taught me how to <span className="font-bold">manage my time</span>, <span className="font-bold">communicate better</span>, and become more <span className="font-bold">independent</span>.
              </p>
              <p>
                It also taught me that college is not just about studying — it's about building memories, improving yourself, and discovering who you want to be.
              </p>
              <p className="text-lg">
                I'm grateful for every moment, every lesson, and every friend along the way.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mb-8">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 text-center cursor-pointer"
                  style={{ backgroundColor: '#DCCCAC' }}
                >
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-2 shadow-md" style={{ backgroundColor: '#546B41' }}>
                    <Icon className="w-7 h-7" style={{ color: '#FFF8EC' }} />
                  </div>
                  <p className="text-xs font-medium" style={{ color: '#546B41' }}>{item.label}</p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Closing Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="rounded-3xl p-8 shadow-xl text-center"
          style={{ backgroundColor: '#99AD7A' }}
        >
          <p className="text-xl italic" style={{ color: '#FFF8EC' }}>
            "This is just the beginning of my journey, and I'm excited for what comes next!"
          </p>
        </motion.div>
      </div>
    </div>
  );
}

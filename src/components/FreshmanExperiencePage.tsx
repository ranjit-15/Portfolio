import { motion } from 'motion/react';
import { Users, Star, Heart, Sparkles, MessageCircle, Award } from 'lucide-react';
import Navigation from './Navigation';

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
          className="text-center mb-8"
        >
          <h1 className="text-3xl md:text-5xl mb-3 font-bold text-primary">
            Freshman Experience
          </h1>
          <p className="text-lg text-primary">
            My first steps into the world of IT at UNO-R.
          </p>
        </motion.div>

        {/* Hero Section with Group Photo */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          className="bg-card rounded-3xl shadow-2xl overflow-hidden mb-8"
        >
          {/* Group Photo Section */}
          <div className="relative h-96">
            <motion.div
              initial={{ opacity: 0, scale: 1.1 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
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
                  className="text-white text-2xl md:text-3xl drop-shadow-lg font-bold"
                 
                >
                  Precious Memories with Friends
                </motion.h2>
              </div>
            </motion.div>
          </div>

          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 100, damping: 15 }}
            className="p-6 md:p-10 bg-secondary"
          >
            <div className="space-y-5 leading-relaxed max-w-5xl mx-auto text-primary">
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
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4 mb-8">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ type: 'spring', stiffness: 150, damping: 15, delay: index * 0.1 }}
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  className="rounded-2xl p-4 md:p-6 shadow-lg text-center h-full flex flex-col justify-center items-center cursor-pointer bg-card transition-shadow hover:shadow-xl"
                >
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-md bg-primary">
                    <Icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <p className="text-xs font-medium text-primary">{item.label}</p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Closing Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 100, damping: 15 }}
          className="rounded-3xl p-8 shadow-xl text-center bg-muted"
        >
          <p className="text-xl italic text-primary-foreground font-medium">
            "Every expert was once a beginner."
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}

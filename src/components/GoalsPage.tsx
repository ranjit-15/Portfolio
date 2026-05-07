import { motion } from 'motion/react';
import { TrendingUp, Users, Heart, Zap } from 'lucide-react';
import Navigation from './Navigation';

import Logos from './Logos';

export default function GoalsPage() {
  const personalGoals = [
    { icon: TrendingUp, label: 'Keep Improving' },
    { icon: Users, label: 'Build Friendships' },
    { icon: Heart, label: 'Give Back to Family' },
    { icon: Zap, label: 'Stay Disciplined' },
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
            Future Goals
          </h1>
          <p className="text-lg max-w-3xl mx-auto text-primary">
            A roadmap of what I aspire to achieve professionally and personally.
          </p>
        </motion.div>

        {/* Main Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 100, damping: 15, delay: 0.1 }}
          className="rounded-3xl shadow-2xl p-6 md:p-10 mb-8 bg-secondary"
        >
          <h2 className="text-2xl font-bold mb-4 text-primary">The Vision</h2>
          <div className="space-y-4 leading-relaxed max-w-5xl mx-auto text-primary">
            <p>
              Right now, my primary focus is becoming a <span className="font-bold">Cloud DevOps Engineer</span>.
            </p>
            <p>
              I am passionate about bridging the gap between development and operations, ensuring smooth, automated, and scalable deployments in the cloud.
            </p>
            <p>
              My goal is to keep improving, mastering cloud infrastructure (like AWS or Azure), and building resilient systems that solve real-world problems.
            </p>
            <p>
              I want to graduate as a <span className="font-bold">highly capable professional</span>, secure a great role in the tech industry, and give back to my parents.
            </p>
            <p>
              Most importantly, I want to become the <span className="font-bold">best version of myself</span> — disciplined, responsible, and always eager to embrace new challenges.
            </p>
          </div>
        </motion.div>

        {/* Personal Goals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
            {personalGoals.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 200, damping: 15, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  className="rounded-2xl p-6 shadow-lg text-center cursor-pointer bg-secondary hover:shadow-xl transition-shadow"
                >
                  <Icon className="w-12 h-12 mx-auto mb-3 text-primary" />
                  <p className="font-medium text-primary">{item.label}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Motivational Quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 120, damping: 15 }}
          className="rounded-3xl p-6 md:p-10 shadow-2xl text-center bg-muted"
        >
          <div className="max-w-2xl mx-auto">
            <div className="inline-block p-4 rounded-full bg-white/20 mb-6 backdrop-blur-sm">
              <Zap className="w-16 h-16 mx-auto text-primary-foreground" />
            </div>
            <p className="text-3xl mb-4 text-primary-foreground font-bold">
              "Continuous learning is the key to mastering the cloud."
            </p>
            <p className="text-lg text-primary-foreground/80">
              I'm excited to face new challenges and build scalable systems that make a difference.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

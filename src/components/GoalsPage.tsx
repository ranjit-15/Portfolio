import { motion } from 'motion/react';
import { TrendingUp, Users, Heart, Zap } from 'lucide-react';
import Navigation from './Navigation';
import FloatingShapes from './FloatingShapes';
import Logos from './Logos';

export default function GoalsPage() {
  const personalGoals = [
    { icon: TrendingUp, label: 'Keep Improving' },
    { icon: Users, label: 'Build Friendships' },
    { icon: Heart, label: 'Give Back to Family' },
    { icon: Zap, label: 'Stay Disciplined' },
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
            Future Goals
          </h1>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: '#546B41' }}>
            Where I want to go and who I want to become
          </p>
        </motion.div>

        {/* Main Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-3xl shadow-2xl p-10 mb-8"
          style={{ backgroundColor: '#DCCCAC' }}
        >
          <div className="space-y-4 leading-relaxed max-w-5xl mx-auto" style={{ color: '#546B41' }}>
            <p>
              I may still be exploring my path, but I already have dreams I want to achieve.
            </p>
            <p>
              I want to become skilled in <span className="font-bold">technology</span> — whether it's programming, UI/UX design, networking, or cybersecurity.
            </p>
            <p>
              My goal is to keep improving, learning, and building projects that will help me grow.
            </p>
            <p>
              I want to graduate as a <span className="font-bold">confident and capable IT student</span>, find a good job, and give back to my parents.
            </p>
            <p>
              I also hope to develop good habits, build strong friendships, and find passion in what I do.
            </p>
            <p className="text-lg">
              Most importantly, I want to become the <span className="font-bold">best version of myself</span> — someone who is disciplined, responsible, kind, and willing to work hard for the future.
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {personalGoals.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="rounded-2xl p-6 shadow-lg text-center cursor-pointer"
                  style={{ backgroundColor: '#DCCCAC' }}
                >
                  <Icon className="w-12 h-12 mx-auto mb-3" style={{ color: '#546B41' }} />
                  <p className="font-medium" style={{ color: '#546B41' }}>{item.label}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Motivational Quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="rounded-3xl p-10 shadow-2xl text-center"
          style={{ backgroundColor: '#99AD7A' }}
        >
          <div className="max-w-3xl mx-auto">
            <div className="mb-4">
              <Zap className="w-16 h-16 mx-auto" style={{ color: '#FFF8EC' }} />
            </div>
            <p className="text-3xl mb-4" style={{ color: '#FFF8EC' }}>
              "Small steps every day lead to big changes."
            </p>
            <p className="text-lg" style={{ color: '#FFF8EC' }}>
              I'm committed to growing, learning, and becoming the best version of myself.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

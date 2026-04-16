import { motion } from 'motion/react';

export default function FloatingShapes() {
  const shapes = [
    // Stars
    { type: 'star', size: 40, left: '8%', top: '12%', color: 'bg-[#99AD7A]/50', duration: 5, rotate: true },
    { type: 'star', size: 35, left: '15%', top: '65%', color: 'bg-[#546B41]/30', duration: 6, rotate: true },
    { type: 'star', size: 30, left: '85%', top: '15%', color: 'bg-[#DCCCAC]/70', duration: 4.5, rotate: true },
    { type: 'star', size: 38, left: '90%', top: '75%', color: 'bg-[#99AD7A]/40', duration: 5.5, rotate: true },

    // Circles
    { type: 'circle', size: 60, left: '5%', top: '40%', color: 'bg-[#DCCCAC]/50', duration: 4 },
    { type: 'circle', size: 50, left: '12%', top: '85%', color: 'bg-[#99AD7A]/40', duration: 5 },
    { type: 'circle', size: 70, left: '88%', top: '45%', color: 'bg-[#546B41]/20', duration: 4.5 },
    { type: 'circle', size: 55, left: '92%', top: '88%', color: 'bg-[#DCCCAC]/40', duration: 5.5 },

    // Small accent circles
    { type: 'circle', size: 25, left: '20%', top: '25%', color: 'bg-[#546B41]/40', duration: 3.5 },
    { type: 'circle', size: 30, left: '78%', top: '30%', color: 'bg-[#99AD7A]/50', duration: 4 },
    { type: 'circle', size: 28, left: '10%', top: '55%', color: 'bg-[#DCCCAC]/60', duration: 4.2 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className={`absolute ${shape.color} ${shape.type === 'circle' ? 'rounded-full' : ''}`}
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.left,
            top: shape.top,
            clipPath: shape.type === 'star'
              ? 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'
              : undefined,
          }}
          animate={{
            y: [0, -25, 0],
            rotate: shape.rotate ? [0, 360] : 0,
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

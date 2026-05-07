import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { useEffect } from 'react';

const shapes = [
  // Stars
  { type: 'star', size: 40, left: '8%', top: '12%', color: 'bg-muted/50', duration: 5, rotate: true, depth: 15 },
  { type: 'star', size: 35, left: '15%', top: '65%', color: 'bg-primary/30', duration: 6, rotate: true, depth: 25 },
  { type: 'star', size: 30, left: '85%', top: '15%', color: 'bg-secondary/70', duration: 4.5, rotate: true, depth: 10 },
  { type: 'star', size: 38, left: '90%', top: '75%', color: 'bg-muted/40', duration: 5.5, rotate: true, depth: 20 },

  // Circles
  { type: 'circle', size: 60, left: '5%', top: '40%', color: 'bg-secondary/50', duration: 4, depth: -10 },
  { type: 'circle', size: 50, left: '12%', top: '85%', color: 'bg-muted/40', duration: 5, depth: -20 },
  { type: 'circle', size: 70, left: '88%', top: '45%', color: 'bg-primary/20', duration: 4.5, depth: -15 },
  { type: 'circle', size: 55, left: '92%', top: '88%', color: 'bg-secondary/40', duration: 5.5, depth: -25 },

  // Small accent circles
  { type: 'circle', size: 25, left: '20%', top: '25%', color: 'bg-primary/40', duration: 3.5, depth: 30 },
  { type: 'circle', size: 30, left: '78%', top: '30%', color: 'bg-muted/50', duration: 4, depth: 40 },
  { type: 'circle', size: 28, left: '10%', top: '55%', color: 'bg-secondary/60', duration: 4.2, depth: 35 },
];

function Shape({ shape, mouseX, mouseY }: { shape: any, mouseX: any, mouseY: any }) {
  const moveX = useTransform(mouseX, [-1, 1], [-shape.depth, shape.depth]);
  const moveY = useTransform(mouseY, [-1, 1], [-shape.depth, shape.depth]);

  return (
    <motion.div
      className={`absolute ${shape.color} ${shape.type === 'circle' ? 'rounded-full' : ''}`}
      style={{
        width: shape.size,
        height: shape.size,
        left: shape.left,
        top: shape.top,
        x: moveX,
        y: moveY,
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
  );
}

export default function FloatingShapes() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { damping: 50, stiffness: 400 });
  const smoothY = useSpring(mouseY, { damping: 50, stiffness: 400 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      mouseX.set(x);
      mouseY.set(y);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {shapes.map((shape, index) => (
        <Shape key={index} shape={shape} mouseX={smoothX} mouseY={smoothY} />
      ))}
    </div>
  );
}

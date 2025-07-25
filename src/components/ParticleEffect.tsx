import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface ParticleEffectProps {
  particleCount?: number;
  className?: string;
}

export default function ParticleEffect({ 
  particleCount = 50, 
  className = "absolute inset-0 pointer-events-none" 
}: ParticleEffectProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const particles = Array.from({ length: particleCount }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 2,
    opacity: Math.random() * 0.6 + 0.2,
  }));

  return (
    <div ref={containerRef} className={className}>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-r from-blue-400 to-purple-500"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
          }}
          animate={{
            y: [-10, 10, -10],
            x: [-5, 5, -5],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

interface MagicCursorProps {
  children: React.ReactNode;
  className?: string;
}

export function MagicCursor({ children, className = "" }: MagicCursorProps) {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const handleMouseMove = (e: MouseEvent) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className={className}>
      {children}
      <div
        ref={cursorRef}
        className="fixed w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full pointer-events-none z-50 mix-blend-difference opacity-70 transition-opacity duration-300"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
    </div>
  );
}

interface FloatingShapesProps {
  shapeCount?: number;
  className?: string;
}

export function FloatingShapes({ 
  shapeCount = 8, 
  className = "absolute inset-0 overflow-hidden pointer-events-none" 
}: FloatingShapesProps) {
  const shapes = Array.from({ length: shapeCount }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 100 + 50,
    rotation: Math.random() * 360,
    duration: Math.random() * 20 + 10,
    shape: ['circle', 'square', 'triangle'][Math.floor(Math.random() * 3)],
    color: [
      'from-blue-400/10 to-purple-400/10',
      'from-pink-400/10 to-orange-400/10',
      'from-green-400/10 to-teal-400/10',
      'from-yellow-400/10 to-red-400/10',
    ][Math.floor(Math.random() * 4)],
  }));

  return (
    <div className={className}>
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className={`absolute bg-gradient-to-br ${shape.color} backdrop-blur-sm`}
          style={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            width: `${shape.size}px`,
            height: `${shape.size}px`,
            borderRadius: shape.shape === 'circle' ? '50%' : shape.shape === 'square' ? '10%' : '0',
            clipPath: shape.shape === 'triangle' ? 'polygon(50% 0%, 0% 100%, 100% 100%)' : 'none',
          }}
          animate={{
            x: [0, 30, -30, 0],
            y: [0, -30, 30, 0],
            rotate: [shape.rotation, shape.rotation + 360],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}

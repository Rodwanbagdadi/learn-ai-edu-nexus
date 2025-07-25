import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedElementProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  type?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scale' | 'rotate';
}

const variants = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  slideUp: {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  },
  slideLeft: {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  },
  slideRight: {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  },
  rotate: {
    hidden: { opacity: 0, rotate: -180 },
    visible: { opacity: 1, rotate: 0 },
  },
};

export function AnimatedElement({
  children,
  className = '',
  delay = 0,
  duration = 0.6,
  type = 'fadeIn',
}: AnimatedElementProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="visible"
      variants={variants[type]}
      transition={{
        duration,
        delay,
        ease: 'easeOut',
      }}
    >
      {children}
    </motion.div>
  );
}

interface ScrollAnimatedElementProps extends AnimatedElementProps {
  threshold?: number;
}

export function ScrollAnimatedElement({
  children,
  className = '',
  delay = 0,
  duration = 0.6,
  type = 'slideUp',
  threshold = 0.1,
}: ScrollAnimatedElementProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: threshold }}
      variants={variants[type]}
      transition={{
        duration,
        delay,
        ease: 'easeOut',
      }}
    >
      {children}
    </motion.div>
  );
}

interface HoverAnimatedElementProps {
  children: ReactNode;
  className?: string;
  scale?: number;
  rotate?: number;
  y?: number;
}

export function HoverAnimatedElement({
  children,
  className = '',
  scale = 1.05,
  rotate = 0,
  y = -5,
}: HoverAnimatedElementProps) {
  return (
    <motion.div
      className={className}
      whileHover={{
        scale,
        rotate,
        y,
        transition: { duration: 0.3, ease: 'easeOut' },
      }}
      whileTap={{
        scale: 0.98,
        transition: { duration: 0.1 },
      }}
    >
      {children}
    </motion.div>
  );
}

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}

export function StaggerContainer({
  children,
  className = '',
  staggerDelay = 0.1,
}: StaggerContainerProps) {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {children}
    </motion.div>
  );
}

export function StaggerChild({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  const item = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.div 
      className={className} 
      variants={item}
      transition={{
        duration: 0.6,
        ease: 'easeOut',
      }}
    >
      {children}
    </motion.div>
  );
}

interface FloatingElementProps {
  children: ReactNode;
  className?: string;
  amplitude?: number;
  duration?: number;
}

export function FloatingElement({
  children,
  className = '',
  amplitude = 10,
  duration = 3,
}: FloatingElementProps) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [-amplitude, amplitude, -amplitude],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      {children}
    </motion.div>
  );
}

interface PulseElementProps {
  children: ReactNode;
  className?: string;
  scale?: [number, number];
  duration?: number;
}

export function PulseElement({
  children,
  className = '',
  scale = [1, 1.05],
  duration = 2,
}: PulseElementProps) {
  return (
    <motion.div
      className={className}
      animate={{
        scale,
      }}
      transition={{
        duration,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut',
      }}
    >
      {children}
    </motion.div>
  );
}

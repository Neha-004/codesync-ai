import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface FloatingOrbProps {
  className?: string;
  color?: 'blue' | 'purple' | 'cyan' | 'pink';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  delay?: number;
}

const colorMap = {
  blue: 'bg-codesync-primary',
  purple: 'bg-codesync-secondary',
  cyan: 'bg-codesync-accent',
  pink: 'bg-pink-500',
};

const sizeMap = {
  sm: 'w-32 h-32',
  md: 'w-48 h-48',
  lg: 'w-64 h-64',
  xl: 'w-96 h-96',
};

export function FloatingOrb({
  className,
  color = 'blue',
  size = 'md',
  delay = 0,
}: FloatingOrbProps) {
  return (
    <motion.div
      className={cn(
        'floating-orb absolute rounded-full',
        colorMap[color],
        sizeMap[size],
        className
      )}
      animate={{
        y: [0, -30, 0],
        x: [0, 15, 0],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        delay,
        ease: 'easeInOut',
      }}
    />
  );
}

export function BackgroundGrid({ className }: { className?: string }) {
  return (
    <div className={cn('pattern-grid absolute inset-0 pointer-events-none', className)} />
  );
}

interface AnimatedGradientProps {
  className?: string;
}

export function AnimatedGradient({ className }: AnimatedGradientProps) {
  return (
    <div className={cn('absolute inset-0 overflow-hidden', className)}>
      <FloatingOrb
        color="blue"
        size="xl"
        className="top-0 -left-40 opacity-30"
        delay={0}
      />
      <FloatingOrb
        color="purple"
        size="lg"
        className="top-1/4 right-0 opacity-25"
        delay={2}
      />
      <FloatingOrb
        color="cyan"
        size="md"
        className="bottom-0 left-1/3 opacity-20"
        delay={4}
      />
    </div>
  );
}

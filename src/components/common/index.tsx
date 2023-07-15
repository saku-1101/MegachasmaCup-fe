'use client';

export * from '@lottiefiles/react-lottie-player';
export * from 'framer-motion';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import { ReactNode } from 'react';

interface MotionDivProps {
  onClick?: (e: any) => any;
  className?: string;
  variants?: Variants;
  initial: string;
  animate: string;
  exit: string;
  children: ReactNode;
}
interface AnimatePresenceProps {
  initial: boolean;
  mode: 'wait' | 'sync' | 'popLayout' | undefined;
  onExitComplete?: () => null;
  children: ReactNode;
}
export const MotionDiv = ({ className, variants, initial, animate, exit, children }: MotionDivProps) => {
  return (
    <motion.div
      onClick={(e) => e.stopPropagation()}
      className={className}
      variants={variants}
      initial={initial}
      animate={animate}
      exit={exit}
    >
      {children}
    </motion.div>
  );
};

export const AnimatePresenceWrapper = ({ initial, mode, onExitComplete, children }: AnimatePresenceProps) => {
  return (
    <AnimatePresence initial={initial} mode={mode} onExitComplete={onExitComplete}>
      {children}
    </AnimatePresence>
  );
};

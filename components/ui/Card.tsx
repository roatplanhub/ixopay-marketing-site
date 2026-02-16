'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  gradient?: boolean;
}

export default function Card({
  children,
  className = '',
  hover = true,
  gradient = false,
}: CardProps) {
  const baseStyles = 'rounded-xl p-8 border border-[var(--border)]';
  const hoverStyles = hover
    ? 'transition-all duration-300 hover:shadow-xl hover:-translate-y-1'
    : '';
  const gradientStyles = gradient
    ? 'bg-gradient-to-br from-[var(--deep-purple)] to-[var(--royal-blue)] text-white'
    : 'bg-white';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`${baseStyles} ${hoverStyles} ${gradientStyles} ${className}`}
    >
      {children}
    </motion.div>
  );
}

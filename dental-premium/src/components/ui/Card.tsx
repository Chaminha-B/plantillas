import { type ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  variant?: 'default' | 'bordered' | 'glow';
}

export function Card({ children, className, hover = true, variant = 'default' }: CardProps) {
  const variants = {
    default:
      'bg-white border border-gray-100 shadow-[var(--shadow-card)]',
    bordered:
      'bg-white border-l-4 border-l-primary border border-gray-100 shadow-[var(--shadow-card)]',
    glow:
      'bg-white border border-gray-100 shadow-[var(--shadow-card)] hover:shadow-[0_0_30px_-5px_var(--color-primary)]',
  };

  return (
    <div
      className={cn(
        'rounded-2xl p-6',
        variants[variant],
        hover && 'transition-all duration-300 hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-1',
        className
      )}
    >
      {children}
    </div>
  );
}

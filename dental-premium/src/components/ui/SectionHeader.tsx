import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  badge?: string;
}

export function SectionHeader({
  title,
  subtitle,
  centered = true,
  className,
  badge,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'mb-16 max-w-2xl',
        centered && 'mx-auto text-center',
        className
      )}
    >
      {badge && (
        <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
          {badge}
        </span>
      )}
      <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg leading-relaxed text-gray-500">{subtitle}</p>
      )}
    </div>
  );
}

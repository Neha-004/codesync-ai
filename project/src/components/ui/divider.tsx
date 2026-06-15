import { cn } from '@/lib/utils';

interface DividerProps {
  className?: string;
  text?: string;
}

export function Divider({ className, text }: DividerProps) {
  if (text) {
    return (
      <div className={cn('relative flex items-center', className)}>
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-white/10" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-codesync-bg px-2 text-muted-foreground">{text}</span>
        </div>
      </div>
    );
  }

  return <div className={cn('w-full border-t border-white/10', className)} />;
}

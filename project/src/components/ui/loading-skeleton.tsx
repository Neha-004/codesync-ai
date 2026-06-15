import { cn } from '@/lib/utils';

export function LoadingSkeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'animate-pulse rounded-md bg-white/10',
        className
      )}
      {...props}
    />
  );
}

export function CardSkeleton() {
  return (
    <div className="glass-card p-6 space-y-4">
      <LoadingSkeleton className="h-8 w-3/4" />
      <LoadingSkeleton className="h-4 w-full" />
      <LoadingSkeleton className="h-4 w-2/3" />
      <div className="flex justify-between pt-4">
        <LoadingSkeleton className="h-8 w-20" />
        <LoadingSkeleton className="h-8 w-20" />
      </div>
    </div>
  );
}

export function RoomCardSkeleton() {
  return (
    <div className="glass-card p-5 space-y-3">
      <div className="flex items-center gap-3">
        <LoadingSkeleton className="h-10 w-10 rounded-full" />
        <div className="flex-1 space-y-2">
          <LoadingSkeleton className="h-4 w-3/4" />
          <LoadingSkeleton className="h-3 w-1/2" />
        </div>
      </div>
      <LoadingSkeleton className="h-16 w-full" />
      <div className="flex gap-2">
        <LoadingSkeleton className="h-6 w-16 rounded-full" />
        <LoadingSkeleton className="h-6 w-20 rounded-full" />
        <LoadingSkeleton className="h-6 w-14 rounded-full" />
      </div>
    </div>
  );
}

export function ActivitySkeleton() {
  return (
    <div className="flex items-center gap-4 p-4">
      <LoadingSkeleton className="h-10 w-10 rounded-full" />
      <div className="flex-1 space-y-2">
        <LoadingSkeleton className="h-4 w-1/2" />
        <LoadingSkeleton className="h-3 w-1/4" />
      </div>
      <LoadingSkeleton className="h-6 w-16" />
    </div>
  );
}

export function CodeEditorSkeleton() {
  return (
    <div className="flex-1 glass-card overflow-hidden">
      <div className="p-4 border-b border-white/10 flex items-center gap-2">
        <LoadingSkeleton className="h-6 w-6 rounded-full" />
        <LoadingSkeleton className="h-6 w-6 rounded-full" />
        <LoadingSkeleton className="h-6 w-6 rounded-full" />
        <LoadingSkeleton className="h-5 w-32 ml-4" />
      </div>
      <div className="p-6 space-y-2">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="flex gap-4">
            <LoadingSkeleton className="h-4 w-8" />
            <LoadingSkeleton className="h-4 flex-1" style={{ width: `${Math.random() * 60 + 40}%` }} />
          </div>
        ))}
      </div>
    </div>
  );
}

export function DashboardSkeleton() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div className="space-y-2">
          <LoadingSkeleton className="h-8 w-48" />
          <LoadingSkeleton className="h-4 w-64" />
        </div>
        <LoadingSkeleton className="h-10 w-32" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {Array.from({ length: 3 }).map((_, i) => (
          <CardSkeleton key={i} />
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <RoomCardSkeleton key={i} />
          ))}
        </div>
        <div className="glass-card p-6 space-y-4">
          <LoadingSkeleton className="h-6 w-32" />
          {Array.from({ length: 5 }).map((_, i) => (
            <ActivitySkeleton key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

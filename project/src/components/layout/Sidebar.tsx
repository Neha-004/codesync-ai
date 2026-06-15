import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import {
  LayoutDashboard,
  Code2,
  Plus,
  Settings,
  User,
  History,
  BookOpen,
  MessageSquare,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const sidebarItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
  { icon: Code2, label: 'My Rooms', path: '/rooms' },
  { icon: History, label: 'Activity', path: '/activity' },
  { icon: BookOpen, label: 'Documentation', path: '/docs' },
  { icon: MessageSquare, label: 'Support', path: '/support' },
];

const bottomItems = [
  { icon: Settings, label: 'Settings', path: '/settings' },
  { icon: User, label: 'Profile', path: '/profile' },
];

interface SidebarProps {
  onCreateRoom?: () => void;
}

export function Sidebar({ onCreateRoom }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  return (
    <TooltipProvider delayDuration={0}>
      <motion.aside
        initial={{ width: 240 }}
        animate={{ width: isCollapsed ? 80 : 240 }}
        transition={{ duration: 0.3 }}
        className="fixed left-0 top-16 bottom-0 z-40 glass border-r border-white/5 flex flex-col"
      >
        <div className="flex-1 p-4 space-y-2">
          <Button
            className={cn(
              'w-full justify-start gap-3 bg-gradient-to-r from-codesync-primary to-codesync-secondary hover:from-blue-600 hover:to-purple-600 text-white',
              isCollapsed && 'justify-center px-2'
            )}
            onClick={onCreateRoom}
          >
            <Plus className="w-5 h-5" />
            {!isCollapsed && <span>Create Room</span>}
          </Button>

          <div className="pt-4 space-y-1">
            {sidebarItems.map((item) => {
              const isActive = location.pathname === item.path;
              const Icon = item.icon;

              const link = (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    'flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200',
                    'hover:bg-white/5',
                    isActive
                      ? 'bg-white/10 text-white'
                      : 'text-muted-foreground hover:text-white',
                    isCollapsed && 'justify-center px-2'
                  )}
                >
                  <Icon className="w-5 h-5 shrink-0" />
                  {!isCollapsed && <span>{item.label}</span>}
                </Link>
              );

              if (isCollapsed) {
                return (
                  <Tooltip key={item.path}>
                    <TooltipTrigger asChild>{link}</TooltipTrigger>
                    <TooltipContent side="right" className="glass-card">
                      <p>{item.label}</p>
                    </TooltipContent>
                  </Tooltip>
                );
              }

              return link;
            })}
          </div>
        </div>

        <div className="p-4 space-y-1 border-t border-white/5">
          {bottomItems.map((item) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;

            const link = (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  'flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200',
                  'hover:bg-white/5',
                  isActive
                    ? 'bg-white/10 text-white'
                    : 'text-muted-foreground hover:text-white',
                  isCollapsed && 'justify-center px-2'
                )}
              >
                <Icon className="w-5 h-5 shrink-0" />
                {!isCollapsed && <span>{item.label}</span>}
              </Link>
            );

            if (isCollapsed) {
              return (
                <Tooltip key={item.path}>
                  <TooltipTrigger asChild>{link}</TooltipTrigger>
                  <TooltipContent side="right" className="glass-card">
                    <p>{item.label}</p>
                  </TooltipContent>
                </Tooltip>
              );
            }

            return link;
          })}
        </div>

        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="absolute -right-3 top-1/2 w-6 h-6 rounded-full bg-codesync-bg border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors"
        >
          {isCollapsed ? (
            <ChevronRight className="w-4 h-4" />
          ) : (
            <ChevronLeft className="w-4 h-4" />
          )}
        </button>
      </motion.aside>
    </TooltipProvider>
  );
}

import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/glass-card';
import { AnimatedSection } from '@/components/ui/animated-components';
import { Code2, Clock, Users, FileCode, Sparkles } from 'lucide-react';

const activities = [
  { type: 'created', title: 'Created room "E-commerce Platform"', time: '5 min ago', icon: Code2 },
  { type: 'invited', title: 'Invited Alice Kim to "E-commerce Platform"', time: '1 hour ago', icon: Users },
  { type: 'saved', title: 'Saved changes in "App.tsx"', time: '2 hours ago', icon: FileCode },
  { type: 'ai', title: 'AI Code Review completed on auth module', time: '3 hours ago', icon: Sparkles },
  { type: 'joined', title: 'Joined room "Machine Learning API"', time: 'Yesterday', icon: Users },
  { type: 'saved', title: 'Created new file "utils.py"', time: 'Yesterday', icon: FileCode },
];

const typeColors: Record<string, string> = {
  created: 'bg-blue-500/20 text-blue-400',
  invited: 'bg-purple-500/20 text-purple-400',
  saved: 'bg-green-500/20 text-green-400',
  ai: 'bg-cyan-500/20 text-cyan-400',
  joined: 'bg-yellow-500/20 text-yellow-400',
};

export function ActivityPage() {
  return (
    <div className="p-6 max-w-3xl mx-auto space-y-6">
      <AnimatedSection>
        <h1 className="text-3xl font-bold mb-2">Activity Timeline</h1>
        <p className="text-muted-foreground">Your recent coding activity and interactions</p>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <GlassCard className="p-6">
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-white/10" />
            <div className="space-y-6">
              {activities.map((activity, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="flex gap-4 relative pl-8"
                >
                  <div className={`absolute left-2 w-4 h-4 rounded-full flex items-center justify-center ${typeColors[activity.type]}`}>
                    <activity.icon className="w-2 h-2" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">{activity.title}</p>
                    <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                      <Clock className="w-3 h-3" /> {activity.time}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </GlassCard>
      </AnimatedSection>
    </div>
  );
}

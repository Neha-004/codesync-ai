import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Code2,
  Users,
  Clock,
  Sparkles,
  Search,
  Filter,
  Plus,
  Zap,
  FileCode,
  MessageSquare,
  Activity,
} from 'lucide-react';
import { GlassCard } from '@/components/ui/glass-card';
import { GradientButton } from '@/components/ui/gradient-button';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/animated-components';

const weeklyActivityData = [
  { day: 'Mon', hours: 4.5 },
  { day: 'Tue', hours: 6.2 },
  { day: 'Wed', hours: 5.8 },
  { day: 'Thu', hours: 7.1 },
  { day: 'Fri', hours: 4.9 },
  { day: 'Sat', hours: 2.3 },
  { day: 'Sun', hours: 1.5 },
];

const languageData = [
  { name: 'TypeScript', percentage: 45, color: '#3178c6' },
  { name: 'Python', percentage: 28, color: '#3776ab' },
  { name: 'JavaScript', percentage: 18, color: '#f7df1e' },
  { name: 'Go', percentage: 9, color: '#00add8' },
];

const recentRooms = [
  {
    id: '1',
    name: 'E-commerce Platform',
    language: 'TypeScript',
    collaborators: 4,
    lastActive: '5 min ago',
    aiEnabled: true,
    isPublic: false,
  },
  {
    id: '2',
    name: 'Machine Learning API',
    language: 'Python',
    collaborators: 2,
    lastActive: '2 hours ago',
    aiEnabled: true,
    isPublic: true,
  },
  {
    id: '3',
    name: 'CLI Tool Development',
    language: 'Go',
    collaborators: 1,
    lastActive: 'Yesterday',
    aiEnabled: false,
    isPublic: false,
  },
];

const recentActivity = [
  { action: 'Created room', room: 'E-commerce Platform', time: '5 min ago' },
  { action: 'Invited', room: 'Machine Learning API', time: '1 hour ago' },
  { action: 'Merged PR', room: 'E-commerce Platform', time: '3 hours ago' },
  { action: 'AI Code Review', room: 'E-commerce Platform', time: 'Yesterday' },
  { action: 'Joined room', room: 'CLI Tool Development', time: '2 days ago' },
];

const aiInsights = [
  {
    type: 'suggestion',
    title: 'Optimize Database Queries',
    description: 'Found 3 slow queries that could be improved with indexing.',
    room: 'E-commerce Platform',
  },
  {
    type: 'review',
    title: 'Security Update Available',
    description: 'Update axios to fix potential XSS vulnerability.',
    room: 'Machine Learning API',
  },
];

const stats = [
  { label: 'Rooms Created', value: '24', change: '+3', icon: Code2, color: 'from-blue-500 to-cyan-400' },
  { label: 'Hours Coded', value: '127', change: '+12', icon: Clock, color: 'from-purple-500 to-pink-400' },
  { label: 'Lines Written', value: '42.5K', change: '+8.2K', icon: FileCode, color: 'from-yellow-500 to-orange-400' },
  { label: 'Collaborators', value: '15', change: '+2', icon: Users, color: 'from-green-500 to-teal-400' },
];

export function DashboardPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading] = useState(false);

  return (
    <div className="p-6 space-y-8">
      {/* Welcome Section */}
      <AnimatedSection>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Welcome back, John</h1>
            <p className="text-muted-foreground">
              Here's what's happening with your coding spaces today.
            </p>
          </div>
          <GradientButton leftIcon={<Plus className="w-4 h-4" />}>
            Create Room
          </GradientButton>
        </div>
      </AnimatedSection>

      {/* Stats Grid */}
      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <StaggerItem key={stat.label}>
            <GlassCard className="p-4 group hover:shadow-glow-sm transition-all duration-300">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <p className="text-2xl font-bold mt-1">{stat.value}</p>
                  <Badge variant="outline" className="mt-2 text-xs border-green-500/30 text-green-400">
                    {stat.change} this week
                  </Badge>
                </div>
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${stat.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <stat.icon className="w-5 h-5 text-white" />
                </div>
              </div>
            </GlassCard>
          </StaggerItem>
        ))}
      </StaggerContainer>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Recent Rooms */}
        <div className="lg:col-span-2 space-y-4">
          <AnimatedSection>
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Recent Rooms</h2>
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="Search rooms..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-9 w-48 border-white/10"
                  />
                </div>
                <Button variant="outline" size="icon" className="border-white/10">
                  <Filter className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </AnimatedSection>

          {isLoading ? (
            <div className="space-y-4">
              {[...Array(3)].map((_, i) => (
                <GlassCard key={i} className="p-4 animate-pulse">
                  <div className="h-16 bg-white/5 rounded" />
                </GlassCard>
              ))}
            </div>
          ) : (
            <StaggerContainer className="space-y-4">
              {recentRooms.map((room) => (
                <StaggerItem key={room.id}>
                  <Link to={`/room/${room.id}`}>
                    <GlassCard className="p-4 group hover:border-codesync-primary/50 transition-all duration-300 cursor-pointer">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-codesync-primary/20 to-codesync-secondary/20 flex items-center justify-center group-hover:from-codesync-primary/30 group-hover:to-codesync-secondary/30 transition-colors">
                          <Code2 className="w-6 h-6 text-codesync-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <h3 className="font-semibold truncate">{room.name}</h3>
                            {room.aiEnabled && (
                              <Badge variant="outline" className="text-xs border-codesync-accent/30 text-codesync-accent">
                                <Sparkles className="w-3 h-3 mr-1" />
                                AI
                              </Badge>
                            )}
                          </div>
                          <div className="flex items-center gap-3 mt-1 text-sm text-muted-foreground">
                            <span>{room.language}</span>
                            <span className="flex items-center gap-1">
                              <Users className="w-3 h-3" />
                              {room.collaborators}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {room.lastActive}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="flex -space-x-2">
                            {[...Array(Math.min(room.collaborators, 3))].map((_, i) => (
                              <Avatar key={i} className="w-6 h-6 border border-codesync-bg">
                                <AvatarFallback className="text-[10px] bg-codesync-bg-tertiary">
                                  {String.fromCharCode(65 + i)}
                                </AvatarFallback>
                              </Avatar>
                            ))}
                            {room.collaborators > 3 && (
                              <div className="w-6 h-6 rounded-full bg-codesync-bg-tertiary flex items-center justify-center text-[10px]">
                                +{room.collaborators - 3}
                              </div>
                            )}
                          </div>
                          <Badge variant={room.isPublic ? 'default' : 'secondary'} className="text-xs">
                            {room.isPublic ? 'Public' : 'Private'}
                          </Badge>
                        </div>
                      </div>
                    </GlassCard>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>
          )}
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          {/* Weekly Activity */}
          <AnimatedSection delay={0.1}>
            <GlassCard className="p-4">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Activity className="w-4 h-4 text-codesync-primary" />
                Weekly Activity
              </h3>
              <div className="h-32 flex items-end gap-2">
                {weeklyActivityData.map((day) => (
                  <div key={day.day} className="flex-1 flex flex-col items-center gap-1">
                    <div
                      className="w-full bg-gradient-to-t from-codesync-primary to-codesync-secondary rounded-t"
                      style={{ height: `${(day.hours / 8) * 100}%` }}
                    />
                    <span className="text-xs text-muted-foreground">{day.day}</span>
                  </div>
                ))}
              </div>
              <div className="text-center mt-2">
                <span className="text-2xl font-bold">32.3h</span>
                <span className="text-sm text-muted-foreground ml-1">total this week</span>
              </div>
            </GlassCard>
          </AnimatedSection>

          {/* Languages */}
          <AnimatedSection delay={0.2}>
            <GlassCard className="p-4">
              <h3 className="font-semibold mb-4">Top Languages</h3>
              <div className="space-y-3">
                {languageData.map((lang) => (
                  <div key={lang.name}>
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span>{lang.name}</span>
                      <span className="text-muted-foreground">{lang.percentage}%</span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all"
                        style={{ width: `${lang.percentage}%`, backgroundColor: lang.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </AnimatedSection>

          {/* Recent Activity */}
          <AnimatedSection delay={0.3}>
            <GlassCard className="p-4">
              <h3 className="font-semibold mb-4">Recent Activity</h3>
              <div className="space-y-3">
                {recentActivity.slice(0, 5).map((activity, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm">
                    <div className="w-2 h-2 rounded-full bg-codesync-primary mt-1.5" />
                    <div className="flex-1">
                      <p>
                        <span className="text-white">{activity.action}</span>{' '}
                        <span className="text-muted-foreground">in</span>{' '}
                        <span className="text-codesync-accent">{activity.room}</span>
                      </p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </AnimatedSection>
        </div>
      </div>

      {/* AI Insights */}
      <AnimatedSection delay={0.4}>
        <div className="space-y-4">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-codesync-accent" />
            AI Insights
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {aiInsights.map((insight, i) => (
              <GlassCard key={i} className="p-4 group hover:border-codesync-accent/50 transition-all cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    insight.type === 'suggestion'
                      ? 'bg-yellow-500/20 text-yellow-400'
                      : 'bg-red-500/20 text-red-400'
                  }`}>
                    {insight.type === 'suggestion' ? (
                      <Zap className="w-5 h-5" />
                    ) : (
                      <MessageSquare className="w-5 h-5" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium">{insight.title}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{insight.description}</p>
                    <Badge variant="outline" className="mt-2 text-xs border-white/10">
                      {insight.room}
                    </Badge>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}

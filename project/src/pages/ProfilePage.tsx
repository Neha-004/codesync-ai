import { Link } from 'react-router-dom';
import {
  Code2,
  Users,
  Clock,
  FileCode,
  Calendar,
  MapPin,
  Link as LinkIcon,
  Twitter,
  Github,
  Linkedin,
  Star,
  Award,
  TrendingUp,
  Settings,
} from 'lucide-react';
import { GlassCard } from '@/components/ui/glass-card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/animated-components';

const recentRooms = [
  { name: 'E-commerce Platform', language: 'TypeScript', lastActive: '5 min ago' },
  { name: 'Machine Learning API', language: 'Python', lastActive: '2 hours ago' },
  { name: 'CLI Tool Development', language: 'Go', lastActive: 'Yesterday' },
];

const achievements = [
  { name: 'First Room', desc: 'Created your first coding room', icon: Star, earned: true },
  { name: 'Collaborator', desc: 'Collaborated with 10+ developers', icon: Users, earned: true },
  { name: 'Power User', desc: 'Coded for 100+ hours', icon: TrendingUp, earned: true },
  { name: 'AI Expert', desc: 'Used AI assistance 1000+ times', icon: Award, earned: false },
];

const stats = [
  { label: 'Rooms Created', value: 24, icon: Code2, color: 'from-blue-500 to-cyan-400' },
  { label: 'Lines Written', value: '42.5K', icon: FileCode, color: 'from-purple-500 to-pink-400' },
  { label: 'Collaborators', value: 15, icon: Users, color: 'from-green-500 to-teal-400' },
  { label: 'Hours Coded', value: 127, icon: Clock, color: 'from-yellow-500 to-orange-400' },
];

const languages = [
  { name: 'TypeScript', percentage: 45, color: '#3178c6' },
  { name: 'Python', percentage: 28, color: '#3776ab' },
  { name: 'Go', percentage: 15, color: '#00add8' },
  { name: 'JavaScript', percentage: 12, color: '#f7df1e' },
];

export function ProfilePage() {
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-8">
      {/* Profile Header */}
      <AnimatedSection>
        <GlassCard className="p-6">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="relative">
              <Avatar className="w-32 h-32">
                <AvatarFallback className="bg-gradient-to-r from-codesync-primary to-codesync-secondary text-white text-3xl">
                  JD
                </AvatarFallback>
              </Avatar>
              <div className="absolute bottom-1 right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-codesync-bg" />
            </div>

            <div className="flex-1 space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <h1 className="text-2xl font-bold">John Doe</h1>
                  <p className="text-muted-foreground">@johndoe</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="border-white/10">
                    <Github className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm" className="border-white/10">
                    <Twitter className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm" className="border-white/10">
                    <Linkedin className="w-4 h-4" />
                  </Button>
                  <Link to="/settings">
                    <Button variant="outline" size="icon" className="border-white/10">
                      <Settings className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>

              <p className="text-muted-foreground max-w-lg">
                Full-stack developer passionate about building elegant solutions. Love collaborating on open-source projects and exploring new technologies.
              </p>

              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  San Francisco, CA
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  Joined Jan 2024
                </span>
                <span className="flex items-center gap-1">
                  <LinkIcon className="w-4 h-4" />
                  <a href="#" className="text-codesync-primary hover:underline">johndoe.dev</a>
                </span>
              </div>
            </div>
          </div>
        </GlassCard>
      </AnimatedSection>

      {/* Stats Grid */}
      <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <StaggerItem key={stat.label}>
            <GlassCard className="p-4 group hover:shadow-glow-sm transition-all">
              <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${stat.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                <stat.icon className="w-5 h-5 text-white" />
              </div>
              <p className="text-2xl font-bold">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </GlassCard>
          </StaggerItem>
        ))}
      </StaggerContainer>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Recent Rooms */}
        <div className="lg:col-span-2 space-y-4">
          <AnimatedSection>
            <h2 className="text-xl font-semibold">Recent Rooms</h2>
          </AnimatedSection>

          <div className="space-y-3">
            {recentRooms.map((room, i) => (
              <AnimatedSection key={room.name} delay={i * 0.1}>
                <Link to={`/room/${i + 1}`}>
                  <GlassCard className="p-4 group hover:border-codesync-primary/50 transition-all cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-codesync-primary/20 flex items-center justify-center">
                        <Code2 className="w-5 h-5 text-codesync-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium">{room.name}</h3>
                        <p className="text-sm text-muted-foreground">{room.language}</p>
                      </div>
                      <span className="text-sm text-muted-foreground">{room.lastActive}</span>
                    </div>
                  </GlassCard>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          {/* Languages */}
          <AnimatedSection delay={0.2}>
            <GlassCard className="p-4">
              <h3 className="font-semibold mb-4">Top Languages</h3>
              <div className="space-y-3">
                {languages.map((lang) => (
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

          {/* Achievements */}
          <AnimatedSection delay={0.3}>
            <GlassCard className="p-4">
              <h3 className="font-semibold mb-4">Achievements</h3>
              <div className="grid grid-cols-2 gap-3">
                {achievements.map((achievement) => (
                  <div
                    key={achievement.name}
                    className={`p-3 rounded-lg border transition-all ${
                      achievement.earned
                        ? 'border-codesync-primary/30 bg-codesync-primary/10'
                        : 'border-white/10 opacity-50'
                    }`}
                  >
                    <achievement.icon className={`w-5 h-5 mb-1 ${achievement.earned ? 'text-codesync-primary' : 'text-muted-foreground'}`} />
                    <p className="text-sm font-medium">{achievement.name}</p>
                    <p className="text-xs text-muted-foreground">{achievement.desc}</p>
                  </div>
                ))}
              </div>
            </GlassCard>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}

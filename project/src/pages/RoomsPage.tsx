import { useState } from 'react';
import { GlassCard } from '@/components/ui/glass-card';
import { AnimatedSection } from '@/components/ui/animated-components';
import { Code2, Search, Filter, LayoutGrid, List, Clock, Users, Sparkles } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { GradientButton } from '@/components/ui/gradient-button';

const rooms = [
  { id: '1', name: 'E-commerce Platform', language: 'TypeScript', collaborators: 4, lastActive: '5 min ago', aiEnabled: true },
  { id: '2', name: 'Machine Learning API', language: 'Python', collaborators: 2, lastActive: '2 hours ago', aiEnabled: true },
  { id: '3', name: 'CLI Tool Development', language: 'Go', collaborators: 1, lastActive: 'Yesterday', aiEnabled: false },
  { id: '4', name: 'Web Scraper', language: 'Python', collaborators: 3, lastActive: '3 days ago', aiEnabled: true },
  { id: '5', name: 'Mobile App Backend', language: 'Node.js', collaborators: 5, lastActive: '1 week ago', aiEnabled: true },
];

export function RoomsPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  return (
    <div className="p-6 space-y-6">
      <AnimatedSection>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">My Rooms</h1>
            <p className="text-muted-foreground">Manage and access your coding rooms</p>
          </div>
          <GradientButton leftIcon={<Code2 className="w-4 h-4" />}>Create New Room</GradientButton>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <div className="flex items-center gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input placeholder="Search rooms..." className="pl-10 border-white/10" />
          </div>
          <Button variant="outline" size="icon" className="border-white/10"><Filter className="w-4 h-4" /></Button>
          <Button
            variant="outline"
            size="icon"
            className={`border-white/10 ${viewMode === 'grid' ? 'bg-white/10' : ''}`}
            onClick={() => setViewMode('grid')}
          >
            <LayoutGrid className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className={`border-white/10 ${viewMode === 'list' ? 'bg-white/10' : ''}`}
            onClick={() => setViewMode('list')}
          >
            <List className="w-4 h-4" />
          </Button>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <div className={viewMode === 'grid' ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-4' : 'space-y-3'}>
          {rooms.map((room) => (
            <GlassCard key={room.id} className="p-4 group hover:border-codesync-primary/50 transition-all cursor-pointer">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-codesync-primary/20 to-codesync-secondary/20 flex items-center justify-center shrink-0">
                  <Code2 className="w-6 h-6 text-codesync-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold truncate">{room.name}</h3>
                  <div className="flex items-center gap-3 mt-1 text-sm text-muted-foreground">
                    <span>{room.language}</span>
                    <span className="flex items-center gap-1"><Users className="w-3 h-3" /> {room.collaborators}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {room.lastActive}</span>
                  </div>
                </div>
              </div>
              <div className="mt-3 flex gap-2">
                <Badge variant="outline" className="text-xs border-white/10">{room.language}</Badge>
                {room.aiEnabled && <Badge variant="outline" className="text-xs border-codesync-accent/30 text-codesync-accent"><Sparkles className="w-3 h-3 mr-1" />AI</Badge>}
              </div>
            </GlassCard>
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
}

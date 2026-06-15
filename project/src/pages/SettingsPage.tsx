import { useState } from 'react';
import {
  User,
  Bell,
  Shield,
  Palette,
  Keyboard,
  Code2,
  Moon,
  Sun,
  Monitor,
  Check,
} from 'lucide-react';
import { GlassCard } from '@/components/ui/glass-card';
import { GradientButton } from '@/components/ui/gradient-button';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { AnimatedSection } from '@/components/ui/animated-components';
import { cn } from '@/lib/utils';

const themes = [
  { id: 'dark', name: 'Dark', icon: Moon, preview: 'bg-codesync-bg' },
  { id: 'light', name: 'Light', icon: Sun, preview: 'bg-gray-100' },
  { id: 'system', name: 'System', icon: Monitor, preview: 'bg-gradient-to-r from-codesync-bg to-gray-100' },
];

const editorSettings = [
  { label: 'Font Size', value: '14px', options: ['12px', '13px', '14px', '15px', '16px', '18px'] },
  { label: 'Tab Size', value: '2', options: ['2', '4'] },
  { label: 'Line Numbers', value: 'on', options: ['on', 'off', 'relative'] },
  { label: 'Word Wrap', value: 'on', options: ['on', 'off'] },
];

export function SettingsPage() {
  const [selectedTheme, setSelectedTheme] = useState('dark');
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    collaborators: true,
    ai: false,
  });

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <AnimatedSection>
        <h1 className="text-3xl font-bold mb-2">Settings</h1>
        <p className="text-muted-foreground">Manage your account and preferences</p>
      </AnimatedSection>

      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList className="glass-card">
          <TabsTrigger value="profile" className="gap-2">
            <User className="w-4 h-4" />
            Profile
          </TabsTrigger>
          <TabsTrigger value="appearance" className="gap-2">
            <Palette className="w-4 h-4" />
            Appearance
          </TabsTrigger>
          <TabsTrigger value="editor" className="gap-2">
            <Code2 className="w-4 h-4" />
            Editor
          </TabsTrigger>
          <TabsTrigger value="notifications" className="gap-2">
            <Bell className="w-4 h-4" />
            Notifications
          </TabsTrigger>
          <TabsTrigger value="security" className="gap-2">
            <Shield className="w-4 h-4" />
            Security
          </TabsTrigger>
          <TabsTrigger value="shortcuts" className="gap-2">
            <Keyboard className="w-4 h-4" />
            Shortcuts
          </TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-6">
          <AnimatedSection>
            <GlassCard className="p-6">
              <h2 className="text-lg font-semibold mb-6">Profile Information</h2>
              <div className="flex items-start gap-6">
                <div className="space-y-3 text-center">
                  <Avatar className="w-24 h-24">
                    <AvatarFallback className="bg-gradient-to-r from-codesync-primary to-codesync-secondary text-white text-2xl">
                      JD
                    </AvatarFallback>
                  </Avatar>
                  <Button variant="outline" size="sm" className="border-white/10">
                    Change Avatar
                  </Button>
                </div>
                <div className="flex-1 space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Full Name</Label>
                      <Input defaultValue="John Doe" className="border-white/10" />
                    </div>
                    <div className="space-y-2">
                      <Label>Username</Label>
                      <Input defaultValue="johndoe" className="border-white/10" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Email</Label>
                    <Input defaultValue="john@example.com" type="email" className="border-white/10" />
                  </div>
                  <div className="space-y-2">
                    <Label>Bio</Label>
                    <textarea
                      className="w-full min-h-[80px] px-3 py-2 rounded-md border border-white/10 bg-transparent focus:outline-none focus:ring-2 focus:ring-codesync-primary"
                      placeholder="Tell us about yourself..."
                    />
                  </div>
                </div>
              </div>
              <Separator className="my-6 bg-white/10" />
              <div className="flex justify-end gap-3">
                <Button variant="outline" className="border-white/10">Cancel</Button>
                <GradientButton>Save Changes</GradientButton>
              </div>
            </GlassCard>
          </AnimatedSection>
        </TabsContent>

        <TabsContent value="appearance" className="space-y-6">
          <AnimatedSection>
            <GlassCard className="p-6">
              <h2 className="text-lg font-semibold mb-6">Theme</h2>
              <div className="grid grid-cols-3 gap-4">
                {themes.map((theme) => (
                  <button
                    key={theme.id}
                    onClick={() => setSelectedTheme(theme.id)}
                    className={cn(
                      'p-4 rounded-xl border transition-all text-center',
                      selectedTheme === theme.id
                        ? 'border-codesync-primary bg-codesync-primary/10'
                        : 'border-white/10 hover:border-white/20'
                    )}
                  >
                    <div className={cn('w-full h-20 rounded-lg mb-3', theme.preview)} />
                    <div className="flex items-center justify-center gap-2">
                      <theme.icon className="w-4 h-4" />
                      <span className="text-sm font-medium">{theme.name}</span>
                      {selectedTheme === theme.id && (
                        <Check className="w-4 h-4 text-codesync-primary" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </GlassCard>

            <GlassCard className="p-6">
              <h2 className="text-lg font-semibold mb-4">Accent Color</h2>
              <div className="flex gap-3">
                {['#3B82F6', '#8B5CF6', '#06B6D4', '#10B981', '#F59E0B', '#EC4899'].map((color) => (
                  <button
                    key={color}
                    className={cn(
                      'w-10 h-10 rounded-full border-2 transition-transform hover:scale-110',
                      color === '#3B82F6' ? 'border-white' : 'border-transparent'
                    )}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </GlassCard>
          </AnimatedSection>
        </TabsContent>

        <TabsContent value="editor" className="space-y-6">
          <AnimatedSection>
            <GlassCard className="p-6">
              <h2 className="text-lg font-semibold mb-6">Editor Settings</h2>
              <div className="space-y-4">
                {editorSettings.map((setting) => (
                  <div key={setting.label} className="flex items-center justify-between">
                    <Label>{setting.label}</Label>
                    <select className="px-3 py-2 rounded-md border border-white/10 bg-transparent focus:outline-none focus:ring-2 focus:ring-codesync-primary">
                      {setting.options.map((opt) => (
                        <option key={opt} value={opt} className="bg-codesync-bg">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                ))}
              </div>
            </GlassCard>

            <GlassCard className="p-6">
              <h2 className="text-lg font-semibold mb-4">Font Family</h2>
              <div className="grid md:grid-cols-2 gap-3">
                {['JetBrains Mono', 'Fira Code', 'Menlo', 'Consolas'].map((font) => (
                  <button
                    key={font}
                    className={cn(
                      'p-3 rounded-lg border transition-all text-left',
                      font === 'JetBrains Mono'
                        ? 'border-codesync-primary bg-codesync-primary/10'
                        : 'border-white/10 hover:border-white/20'
                    )}
                    style={{ fontFamily: font }}
                  >
                    <span className="text-sm">{font}</span>
                  </button>
                ))}
              </div>
            </GlassCard>
          </AnimatedSection>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <AnimatedSection>
            <GlassCard className="p-6 space-y-6">
              <h2 className="text-lg font-semibold">Notification Preferences</h2>
              <div className="space-y-4">
                {[
                  { key: 'email', label: 'Email Notifications', desc: 'Receive updates via email' },
                  { key: 'push', label: 'Push Notifications', desc: 'Browser notifications' },
                  { key: 'collaborators', label: 'Collaborator Activity', desc: 'When collaborators join or leave' },
                  { key: 'ai', label: 'AI Suggestions', desc: 'Get notified about AI insights' },
                ].map((item) => (
                  <div key={item.key} className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{item.label}</p>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                    <Switch
                      checked={notifications[item.key as keyof typeof notifications]}
                      onCheckedChange={(checked) =>
                        setNotifications((prev) => ({ ...prev, [item.key]: checked }))
                      }
                    />
                  </div>
                ))}
              </div>
            </GlassCard>
          </AnimatedSection>
        </TabsContent>

        <TabsContent value="security" className="space-y-6">
          <AnimatedSection>
            <GlassCard className="p-6 space-y-6">
              <h2 className="text-lg font-semibold">Security Settings</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 glass-card rounded-lg">
                  <div>
                    <p className="font-medium">Two-Factor Authentication</p>
                    <p className="text-sm text-muted-foreground">Add an extra layer of security</p>
                  </div>
                  <Button variant="outline" className="border-white/10">Enable</Button>
                </div>
                <div className="flex items-center justify-between p-4 glass-card rounded-lg">
                  <div>
                    <p className="font-medium">Password</p>
                    <p className="text-sm text-muted-foreground">Last changed 30 days ago</p>
                  </div>
                  <Button variant="outline" className="border-white/10">Change</Button>
                </div>
                <div className="flex items-center justify-between p-4 glass-card rounded-lg">
                  <div>
                    <p className="font-medium">Active Sessions</p>
                    <p className="text-sm text-muted-foreground">3 devices currently logged in</p>
                  </div>
                  <Button variant="outline" className="border-white/10">Manage</Button>
                </div>
              </div>
            </GlassCard>
          </AnimatedSection>
        </TabsContent>

        <TabsContent value="shortcuts" className="space-y-6">
          <AnimatedSection>
            <GlassCard className="p-6">
              <h2 className="text-lg font-semibold mb-4">Keyboard Shortcuts</h2>
              <p className="text-sm text-muted-foreground mb-4">
                Customize your keyboard shortcuts for faster workflow.
              </p>
              <Button variant="outline" className="border-white/10">
                <Keyboard className="w-4 h-4 mr-2" />
                View All Shortcuts
              </Button>
            </GlassCard>
          </AnimatedSection>
        </TabsContent>
      </Tabs>
    </div>
  );
}

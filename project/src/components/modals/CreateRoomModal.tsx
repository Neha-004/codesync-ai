import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { X, Globe, Lock, Sparkles, ChevronRight, Code2 } from 'lucide-react';
import { GradientButton } from '../ui/gradient-button';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

const languages = [
  { id: 'javascript', name: 'JavaScript', extension: '.js' },
  { id: 'typescript', name: 'TypeScript', extension: '.ts' },
  { id: 'python', name: 'Python', extension: '.py' },
  { id: 'java', name: 'Java', extension: '.java' },
  { id: 'cpp', name: 'C++', extension: '.cpp' },
  { id: 'go', name: 'Go', extension: '.go' },
  { id: 'rust', name: 'Rust', extension: '.rs' },
  { id: 'html', name: 'HTML', extension: '.html' },
  { id: 'css', name: 'CSS', extension: '.css' },
];

interface CreateRoomModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CreateRoomModal({ open, onOpenChange }: CreateRoomModalProps) {
  const [step, setStep] = useState(1);
  const [roomName, setRoomName] = useState('');
  const [language, setLanguage] = useState('typescript');
  const [privacy, setPrivacy] = useState<'public' | 'private'>('private');
  const [aiEnabled, setAiEnabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleCreate = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
    onOpenChange(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={() => onOpenChange(false)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-lg"
          >
            <div className="glass-card gradient-border p-6 rounded-2xl">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold">Create New Room</h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => onOpenChange(false)}
                  className="h-8 w-8"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>

              {/* Progress Steps */}
              <div className="flex items-center gap-2 mb-6">
                {[1, 2, 3].map((s) => (
                  <div key={s} className="flex items-center">
                    <div
                      className={cn(
                        'w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all',
                        step >= s
                          ? 'bg-gradient-to-r from-codesync-primary to-codesync-secondary text-white'
                          : 'bg-white/10 text-muted-foreground'
                      )}
                    >
                      {s}
                    </div>
                    {s < 3 && (
                      <div
                        className={cn(
                          'w-12 h-0.5 mx-1 transition-colors',
                          step > s ? 'bg-codesync-primary' : 'bg-white/10'
                        )}
                      />
                    )}
                  </div>
                ))}
              </div>

              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    <div className="space-y-2">
                      <Label htmlFor="room-name">Room Name</Label>
                      <Input
                        id="room-name"
                        placeholder="my-awesome-project"
                        value={roomName}
                        onChange={(e) => setRoomName(e.target.value)}
                        className="glass-card border-white/10"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>Programming Language</Label>
                      <div className="grid grid-cols-3 gap-2">
                        {languages.slice(0, 9).map((lang) => (
                          <button
                            key={lang.id}
                            onClick={() => setLanguage(lang.id)}
                            className={cn(
                              'p-3 rounded-lg border transition-all text-left',
                              language === lang.id
                                ? 'bg-codesync-primary/20 border-codesync-primary'
                                : 'bg-white/5 border-white/10 hover:border-white/20'
                            )}
                          >
                            <Code2 className="w-4 h-4 mb-1" />
                            <span className="text-xs">{lang.name}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-end pt-4">
                      <GradientButton
                        onClick={() => setStep(2)}
                        disabled={!roomName}
                        rightIcon={<ChevronRight className="w-4 h-4" />}
                      >
                        Next
                      </GradientButton>
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    <div className="space-y-2">
                      <Label>Privacy Settings</Label>
                      <Tabs value={privacy} onValueChange={(v) => setPrivacy(v as 'public' | 'private')}>
                        <TabsList className="grid grid-cols-2 w-full glass-card">
                          <TabsTrigger value="private" className="gap-2">
                            <Lock className="w-4 h-4" />
                            Private
                          </TabsTrigger>
                          <TabsTrigger value="public" className="gap-2">
                            <Globe className="w-4 h-4" />
                            Public
                          </TabsTrigger>
                        </TabsList>
                      </Tabs>
                      <p className="text-sm text-muted-foreground">
                        {privacy === 'private'
                          ? 'Only invited members can access'
                          : 'Anyone with the link can access'}
                      </p>
                    </div>

                    <div className="flex items-center justify-between p-4 glass-card rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-codesync-primary to-codesync-secondary flex items-center justify-center">
                          <Sparkles className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="font-medium">AI Assistant</p>
                          <p className="text-sm text-muted-foreground">
                            Get real-time code suggestions
                          </p>
                        </div>
                      </div>
                      <Switch checked={aiEnabled} onCheckedChange={setAiEnabled} />
                    </div>

                    <div className="flex justify-between pt-4">
                      <Button variant="ghost" onClick={() => setStep(1)}>
                        Back
                      </Button>
                      <GradientButton
                        onClick={() => setStep(3)}
                        rightIcon={<ChevronRight className="w-4 h-4" />}
                      >
                        Next
                      </GradientButton>
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    <div className="p-6 glass-card rounded-lg space-y-4">
                      <h3 className="font-medium">Room Summary</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Name</span>
                          <span>{roomName}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Language</span>
                          <span>{languages.find((l) => l.id === language)?.name}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Privacy</span>
                          <span className="capitalize">{privacy}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">AI Assistant</span>
                          <span>{aiEnabled ? 'Enabled' : 'Disabled'}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between pt-4">
                      <Button variant="ghost" onClick={() => setStep(2)}>
                        Back
                      </Button>
                      <GradientButton
                        onClick={handleCreate}
                        isLoading={isLoading}
                        rightIcon={<ChevronRight className="w-4 h-4" />}
                      >
                        Create Room
                      </GradientButton>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

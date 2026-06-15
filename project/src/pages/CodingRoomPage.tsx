import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import Editor from '@monaco-editor/react';
import {
  Code2,
  MessageSquare,
  Sparkles,
  Play,
  Save,
  ChevronLeft,
  ChevronRight,
  Send,
  Mic,
  MicOff,
  FolderTree,
  FileCode,
  Bug,
  Lightbulb,
  Wand2,
  Bot,
  X,
} from 'lucide-react';
import { GradientButton } from '@/components/ui/gradient-button';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';

const files = [
  { name: 'src', type: 'folder', children: [
    { name: 'index.ts', type: 'file', language: 'typescript' },
    { name: 'App.tsx', type: 'file', language: 'typescript' },
    { name: 'utils.ts', type: 'file', language: 'typescript' },
  ]},
  { name: 'components', type: 'folder', children: [
    { name: 'Button.tsx', type: 'file', language: 'typescript' },
    { name: 'Card.tsx', type: 'file', language: 'typescript' },
  ]},
  { name: 'package.json', type: 'file', language: 'json' },
];

const collaborators = [
  { id: '1', name: 'John Doe', initials: 'JD', color: '#3B82F6', status: 'online', cursor: { line: 12, col: 15 } },
  { id: '2', name: 'Alice Kim', initials: 'AK', color: '#8B5CF6', status: 'online', cursor: { line: 8, col: 22 } },
  { id: '3', name: 'Sam Miller', initials: 'SM', color: '#06B6D4', status: 'away', cursor: null },
];

const chatMessages = [
  { id: '1', user: 'Alice Kim', initials: 'AK', color: '#8B5CF6', message: 'Hey, can you review the new feature I pushed?', time: '10:30 AM' },
  { id: '2', user: 'John Doe', initials: 'JD', color: '#3B82F6', message: 'Sure, looking at it now', time: '10:32 AM' },
  { id: '3', user: 'Alice Kim', initials: 'AK', color: '#8B5CF6', message: 'I think we might need to refactor the auth module', time: '10:35 AM' },
];

const defaultCode = `import React, { useState, useEffect } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
}

export function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch('/api/users');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Failed to fetch users:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchUsers();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}`;

export function CodingRoomPage() {
  useParams(); // roomId from URL - used for future API calls
  const [code, setCode] = useState(defaultCode);
  const [showChat, setShowChat] = useState(true);
  const [showAI, setShowAI] = useState(true);
  const [showExplorer, setShowExplorer] = useState(true);
  const [voiceEnabled, setVoiceEnabled] = useState(false);
  const [chatMessage, setChatMessage] = useState('');
  const [aiInput, setAiInput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const editorRef = useRef<unknown>(null);

  const handleEditorDidMount = (editor: unknown) => {
    editorRef.current = editor;
  };

  const handleRun = async () => {
    setIsRunning(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsRunning(false);
  };

  return (
    <div className="h-screen flex flex-col bg-codesync-bg overflow-hidden">
      {/* Top Bar */}
      <motion.div
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        className="h-14 glass border-b border-white/5 flex items-center justify-between px-4 shrink-0"
      >
        <div className="flex items-center gap-4">
          <Link to="/dashboard" className="flex items-center gap-2 text-muted-foreground hover:text-white transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </Link>
          <div className="flex items-center gap-2">
            <Code2 className="w-5 h-5 text-codesync-primary" />
            <span className="font-semibold">E-commerce Platform</span>
            <Badge variant="outline" className="text-xs border-white/10">TypeScript</Badge>
          </div>
        </div>

        <div className="flex items-center gap-6">
          {/* Collaborators */}
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {collaborators.map((collab) => (
                <Avatar
                  key={collab.id}
                  className="w-8 h-8 border-2 border-codesync-bg"
                  style={{ borderColor: collab.color }}
                >
                  <AvatarFallback
                    className="text-xs"
                    style={{ backgroundColor: collab.color }}
                  >
                    {collab.initials}
                  </AvatarFallback>
                </Avatar>
              ))}
            </div>
            <span className="text-sm text-muted-foreground">3 online</span>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setVoiceEnabled(!voiceEnabled)}
              className={cn(voiceEnabled && 'text-green-400')}
            >
              {voiceEnabled ? <Mic className="w-4 h-4" /> : <MicOff className="w-4 h-4" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setShowChat(!showChat)}
              className={cn(showChat && 'text-codesync-primary')}
            >
              <MessageSquare className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setShowAI(!showAI)}
              className={cn(showAI && 'text-codesync-accent')}
            >
              <Sparkles className="w-4 h-4" />
            </Button>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              className="border-white/10 gap-2"
            >
              <Save className="w-4 h-4" />
              Save
            </Button>
            <GradientButton
              size="sm"
              leftIcon={!isRunning ? <Play className="w-4 h-4" /> : undefined}
              isLoading={isRunning}
              onClick={handleRun}
            >
              Run
            </GradientButton>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* File Explorer */}
        <AnimatePresence>
          {showExplorer && (
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 240, opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              className="shrink-0 border-r border-white/5 overflow-hidden"
            >
              <div className="h-full glass">
                <div className="p-3 flex items-center justify-between border-b border-white/5">
                  <span className="text-sm font-medium flex items-center gap-2">
                    <FolderTree className="w-4 h-4" />
                    Explorer
                  </span>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-6 w-6"
                    onClick={() => setShowExplorer(false)}
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                </div>
                <ScrollArea className="h-[calc(100vh-120px)]">
                  <div className="p-2 space-y-1">
                    {files.map((file) => (
                      <div key={file.name}>
                        <button
                          className={cn(
                            'w-full flex items-center gap-2 px-2 py-1.5 rounded text-sm',
                            'hover:bg-white/5 transition-colors text-left'
                          )}
                        >
                          {file.type === 'folder' ? (
                            <FolderTree className="w-4 h-4 text-yellow-400" />
                          ) : (
                            <FileCode className="w-4 h-4 text-blue-400" />
                          )}
                          {file.name}
                        </button>
                        {file.children && (
                          <div className="ml-4 space-y-1">
                            {file.children.map((child) => (
                              <button
                                key={child.name}
                                className={cn(
                                  'w-full flex items-center gap-2 px-2 py-1.5 rounded text-sm',
                                  'hover:bg-white/5 transition-colors text-left',
                                  child.name === 'App.tsx' && 'bg-white/10'
                                )}
                              >
                                <FileCode className="w-4 h-4 text-blue-400" />
                                {child.name}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Editor and Output */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Editor */}
          <div className="flex-1 overflow-hidden relative">
            {!showExplorer && (
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-2 top-2 z-10 h-7 w-7"
                onClick={() => setShowExplorer(true)}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            )}
            <Editor
              height="100%"
              defaultLanguage="typescript"
              theme="vs-dark"
              value={code}
              onChange={(value) => setCode(value || '')}
              onMount={handleEditorDidMount}
              options={{
                fontSize: 14,
                fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                minimap: { enabled: false },
                padding: { top: 16 },
                lineNumbers: 'on',
                renderLineHighlight: 'all',
                cursorBlinking: 'smooth',
                smoothScrolling: true,
                scrollBeyondLastLine: false,
                automaticLayout: true,
                tabSize: 2,
                wordWrap: 'on',
                bracketPairColorization: { enabled: true },
              }}
            />
          </div>

          {/* Output Panel */}
          <div className="h-48 border-t border-white/5 glass">
            <Tabs defaultValue="output" className="h-full">
              <TabsList className="px-2 pt-2 bg-transparent">
                <TabsTrigger value="output" className="text-sm">Output</TabsTrigger>
                <TabsTrigger value="terminal" className="text-sm">Terminal</TabsTrigger>
                <TabsTrigger value="problems" className="text-sm">Problems</TabsTrigger>
              </TabsList>
              <TabsContent value="output" className="p-4 h-[calc(100%-48px)] overflow-auto">
                <div className="font-mono text-sm space-y-1">
                  <div className="text-green-400">Compilation successful</div>
                  <div className="text-muted-foreground">Ready to run...</div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Right Panels */}
        <div className="flex">
          {/* Chat Panel */}
          <AnimatePresence>
            {showChat && (
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 320, opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                className="shrink-0 border-l border-white/5 overflow-hidden"
              >
                <div className="h-full glass flex flex-col">
                  <div className="p-3 flex items-center justify-between border-b border-white/5">
                    <span className="text-sm font-medium flex items-center gap-2">
                      <MessageSquare className="w-4 h-4" />
                      Team Chat
                    </span>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-6 w-6"
                      onClick={() => setShowChat(false)}
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                  <ScrollArea className="flex-1 p-3">
                    <div className="space-y-4">
                      {chatMessages.map((msg) => (
                        <div key={msg.id} className="flex gap-2">
                          <Avatar className="w-8 h-8">
                            <AvatarFallback
                              className="text-xs"
                              style={{ backgroundColor: msg.color }}
                            >
                              {msg.initials}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-medium">{msg.user}</span>
                              <span className="text-xs text-muted-foreground">{msg.time}</span>
                            </div>
                            <p className="text-sm text-muted-foreground">{msg.message}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                  <div className="p-3 border-t border-white/5">
                    <div className="flex gap-2">
                      <Input
                        placeholder="Type a message..."
                        value={chatMessage}
                        onChange={(e) => setChatMessage(e.target.value)}
                        className="border-white/10"
                      />
                      <Button size="icon" className="shrink-0">
                        <Send className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* AI Panel */}
          <AnimatePresence>
            {showAI && (
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 360, opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                className="shrink-0 border-l border-white/5 overflow-hidden"
              >
                <div className="h-full glass flex flex-col">
                  <div className="p-3 flex items-center justify-between border-b border-white/5">
                    <span className="text-sm font-medium flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-codesync-accent" />
                      AI Assistant
                    </span>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-6 w-6"
                      onClick={() => setShowAI(false)}
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>

                  <Tabs defaultValue="chat" className="flex-1 flex flex-col">
                    <TabsList className="px-2 pt-2 bg-transparent">
                      <TabsTrigger value="chat" className="text-xs">Chat</TabsTrigger>
                      <TabsTrigger value="review" className="text-xs">Review</TabsTrigger>
                      <TabsTrigger value="refactor" className="text-xs">Refactor</TabsTrigger>
                    </TabsList>

                    <TabsContent value="chat" className="flex-1 flex flex-col overflow-hidden">
                      <ScrollArea className="flex-1 p-3">
                        <div className="space-y-4">
                          <div className="flex gap-2">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-codesync-primary to-codesync-secondary flex items-center justify-center shrink-0">
                              <Bot className="w-4 h-4 text-white" />
                            </div>
                            <div className="flex-1">
                              <p className="text-sm">I'm here to help you code faster. What would you like me to do?</p>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Avatar className="w-8 h-8">
                              <AvatarFallback className="text-xs bg-codesync-primary">JD</AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <p className="text-sm">Can you review this code for potential bugs?</p>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-codesync-primary to-codesync-secondary flex items-center justify-center shrink-0">
                              <Bot className="w-4 h-4 text-white" />
                            </div>
                            <div className="flex-1">
                              <p className="text-sm">I found 2 potential issues:</p>
                              <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                                <li className="flex items-center gap-2">
                                  <Bug className="w-3 h-3 text-yellow-400" />
                                  Add error handling for fetch
                                </li>
                                <li className="flex items-center gap-2">
                                  <Lightbulb className="w-3 h-3 text-blue-400" />
                                  Consider adding loading states
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </ScrollArea>
                      <div className="p-3 border-t border-white/5">
                        <div className="flex gap-2">
                          <Input
                            placeholder="Ask AI anything..."
                            value={aiInput}
                            onChange={(e) => setAiInput(e.target.value)}
                            className="border-white/10"
                          />
                          <GradientButton size="icon" className="shrink-0">
                            <Send className="w-4 h-4" />
                          </GradientButton>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="review" className="flex-1 overflow-auto p-3">
                      <div className="space-y-3">
                        <div className="glass-card p-3 border-l-2 border-l-yellow-400">
                          <div className="flex items-start gap-2">
                            <Bug className="w-4 h-4 text-yellow-400 mt-0.5" />
                            <div>
                              <p className="text-sm font-medium">Potential null pointer</p>
                              <p className="text-xs text-muted-foreground">Add null check for user input</p>
                            </div>
                          </div>
                        </div>
                        <div className="glass-card p-3 border-l-2 border-l-blue-400">
                          <div className="flex items-start gap-2">
                            <Lightbulb className="w-4 h-4 text-blue-400 mt-0.5" />
                            <div>
                              <p className="text-sm font-medium">Optimize loop</p>
                              <p className="text-xs text-muted-foreground">Consider using .map() instead of for loop</p>
                            </div>
                          </div>
                        </div>
                        <GradientButton className="w-full" leftIcon={<Wand2 className="w-4 h-4" />}>
                          Auto Fix All
                        </GradientButton>
                      </div>
                    </TabsContent>

                    <TabsContent value="refactor" className="flex-1 overflow-auto p-3">
                      <div className="space-y-4">
                        <div className="glass-card p-3">
                          <p className="text-sm font-medium mb-2">Suggested Refactoring</p>
                          <p className="text-xs text-muted-foreground">Convert to custom hook for better reusability</p>
                          <GradientButton size="sm" className="mt-3">
                            Apply Refactor
                          </GradientButton>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Floating Collaborator Cursors */}
      <div className="relative pointer-events-none">
        {collaborators
          .filter((c) => c.cursor)
          .map((collab) => (
            <motion.div
              key={collab.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute z-50 flex items-center"
              style={{
                top: `${(collab.cursor?.line || 1) * 19 + 60}px`,
                left: `${(collab.cursor?.col || 1) * 8 + (showExplorer ? 240 : 0) + 80}px`,
              }}
            >
              <div
                className="w-0.5 h-5"
                style={{ backgroundColor: collab.color }}
              />
              <div
                className="px-1.5 py-0.5 rounded text-[10px] font-medium"
                style={{ backgroundColor: collab.color }}
              >
                {collab.name}
              </div>
            </motion.div>
          ))}
      </div>
    </div>
  );
}

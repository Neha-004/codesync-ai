import { motion, AnimatePresence } from 'framer-motion';
import { X, Keyboard } from 'lucide-react';
import { Button } from '@/components/ui/button';

const shortcuts = [
  {
    category: 'Navigation',
    items: [
      { keys: ['⌘', 'K'], description: 'Open command palette' },
      { keys: ['⌘', 'P'], description: 'Quick file open' },
      { keys: ['⌘', 'B'], description: 'Toggle sidebar' },
      { keys: ['⌘', 'J'], description: 'Toggle terminal' },
    ],
  },
  {
    category: 'Editor',
    items: [
      { keys: ['⌘', 'S'], description: 'Save file' },
      { keys: ['⌘', 'Z'], description: 'Undo' },
      { keys: ['⌘', '⇧', 'Z'], description: 'Redo' },
      { keys: ['⌘', 'D'], description: 'Select word' },
      { keys: ['⌘', '/'], description: 'Toggle comment' },
    ],
  },
  {
    category: 'Collaboration',
    items: [
      { keys: ['⌘', '⇧', 'C'], description: 'Open chat' },
      { keys: ['⌘', '⇧', 'A'], description: 'AI assistant' },
      { keys: ['⌘', '⇧', 'V'], description: 'Voice call' },
    ],
  },
  {
    category: 'AI Features',
    items: [
      { keys: ['⌘', 'I'], description: 'AI code review' },
      { keys: ['⌘', '⇧', 'R'], description: 'AI refactoring' },
      { keys: ['⌘', '⇧', 'E'], description: 'Explain code' },
    ],
  },
];

interface KeyboardShortcutsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function KeyboardShortcutsModal({
  open,
  onOpenChange,
}: KeyboardShortcutsModalProps) {
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
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-2xl max-h-[80vh] overflow-y-auto"
          >
            <div className="glass-card gradient-border p-6 rounded-2xl">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-codesync-primary to-codesync-secondary flex items-center justify-center">
                    <Keyboard className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-xl font-bold">Keyboard Shortcuts</h2>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => onOpenChange(false)}
                  className="h-8 w-8"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {shortcuts.map((category) => (
                  <div key={category.category} className="space-y-3">
                    <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                      {category.category}
                    </h3>
                    <div className="space-y-2">
                      {category.items.map((shortcut, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between py-2"
                        >
                          <span className="text-sm">{shortcut.description}</span>
                          <div className="flex items-center gap-1">
                            {shortcut.keys.map((key, keyIndex) => (
                              <span key={keyIndex}>
                                <kbd className="px-2 py-1 text-xs font-medium bg-white/10 rounded border border-white/20 shadow-sm">
                                  {key}
                                </kbd>
                                {keyIndex < shortcut.keys.length - 1 && (
                                  <span className="mx-0.5 text-muted-foreground">+</span>
                                )}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
